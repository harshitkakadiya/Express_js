// => npm init / npm init -y (default)

const express = require('express')

// => http.createServer();

const server = express();

// => CRUD -> Create(POST), Read(GET), Update(PUT, PATCH), Delete(DELETE)

server.get("/",(req, res)=>{
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

server.put("/user",(req, res)=>{
    // res.status(201);
    res.json({message:'User PUT Method'});
})

server.patch("/user",(req, res)=>{
    // res.status(201);
    res.json({message:'User PATCH Method'});
})

server.delete("/user",(req, res)=>{
    // res.status(201);
    res.json({message:'User DELETE Method'});
})

server.patch("/admin",(req, res)=>{
    // res.status(201);
    res.json({message:'Admin PATCH Method'});
})

server.delete("/admin",(req, res)=>{
    // res.status(201);
    res.json({message:'Admin DELETE Method'});
})

server.listen(1000,()=>{
    console.log(`Server start at http://localhost:1000`);
    
});