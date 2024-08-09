// => npm init / npm init -y (default)

const express = require('express');

// => http.createServer();

const server = express();

const fs = require('fs');
const data = fs.readFileSync('./friend.json','utf-8')

const morgan = require('morgan');

// 4.0 version -> body-parser
// express.json() -> rae / json formare
// express.urlencoded() -> form
// express.static()

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/hello",express.static('public'));
server.use(morgan('dev'));


let middleWare = (req, res, next)=>{
    if(req.body.age >= 18){
        console.log('Success');
        next();
    }else{
        return res.json({message: 'Incccorexxt Way!!!!!'})
    }
}
// => CRUD -> Create(POST), Read(GET), Update(PUT, PATCH), Delete(DELETE)

server.get("/", middleWare,(req, res)=>{
    res.write('Welcome To Express Server');
    res.end();
})

// server.get("/",(req, res)=>{
//     res.send('GET Method - 1');
// })

server.get("/user",(req, res)=>{
    res.status(200);
    res.json({message:'User GET Method'});
})

server.post("/user",(req, res)=>{
    res.status(201);
    res.json({message:'User POST Method'});
})


server.get("/friend", (req,res)=>{
    res.status(200);
    res.json(JSON.parse(data));
})

server.listen(1000,()=>{
    console.log(`Server start at http://localhost:1000`);
});

