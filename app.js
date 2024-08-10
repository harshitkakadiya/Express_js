const express = require('express');
const app = express();
const morgan  = require('morgan');
const products = require('./product.json');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'))

app.get("/", (req,res)=>{
    res.send('Welcome to Express Server');
})
// CRUD

// Add New Product - Creatr
app.post("/product", (req, res) =>{
    // console.log(req.body);
    products.push(req.body);
    res.json({product: req.body, message: 'Product Addesd Success'});
});

// Ger All Product - Read
app.get(".product", (req, res) => {
    res.json(products);
})

// Get Single Product -READ
app.get("/product/:id",(req,res)  => {
    let id = +req.params.id;
    let item = products.find((product)=>product.id === id)
    res.json(item);
});

app.listen(1234, ()=> {
    console.log("Server Start");
    
})