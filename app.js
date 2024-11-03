
let  bodyParser = require('body-parser');
// import express
let express = require('express') ;
let mongoose = require('mongoose');

//fire up express 
let  app = express();
let routes = require('./routes');
const dotgitignore = require('dotgitignore')()

//connect  a database and create database


mongoose.connect('mongodb://localhost:27017/david08').then((e)=>{
    console.log("connected to database");
});

//middle ware body-p
app.use(express.json());

//create application/json parser
app.use(bodyParser.urlencoded({extended: false}))


let route = require('./route');

//middle ware
app.use ('/',route);






//setting up the server
const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});

module.exports = app ;