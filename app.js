const express = require('express');

const app = express();

const PORT = 3007;

const path = require('path');

app.use('/static', express.static(__dirname + '/public'))

app.listen(PORT, ()=>{
    console.log("Servidor iniciado en el puerto " + PORT);
});

app.get('/', (req, res)=>res.sendFile(__dirname + "/views/home.html"))

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
