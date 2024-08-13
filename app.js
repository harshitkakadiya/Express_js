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
app.get("/product", (req, res) => {
    res.json(products);
})

// Get Single Product -READ
app.get("/product/:id",(req,res)  => {
    let id = +req.params.id;
    let item = products.find((product)=>product.id === id)
    res.json(item);
});

// Replace Data -PUT
app.put("/product/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    products.splice(productIndex, 1, { ...req.body});
    res.json({ message: "Product Replace Success"});
});

// Upadate Data -PATCH
app.patch("/product/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
    products.splice(productIndex, 1, {...product, ...req.body});
    res.json({ message: "Product Update Success"});
});

// Delet Data -DELETE
app.delete("/product/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    const product = products[productIndex];
    // console.log(product);
    products.splice(productIndex, 1);
    res.json({ message: "Product DELETE Success"});
});

app.listen(1234, ()=> {
    console.log("Server Start");
    
})