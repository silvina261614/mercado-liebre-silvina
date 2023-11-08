const express = require('express');

const app = express();



const path = require('path');

app.use('/static', express.static(__dirname + '/public'))

const port = process.env.PORT || 3007;
app.listen(port,()=>console.log('Servidor corriendo en el puerto ${port}'));

app.get('/', (req, res)=>res.sendFile(__dirname + "/views/home.html"))

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
