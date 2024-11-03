let mongoose = require('mongoose');

// let mongoose = require('mongoose');
// let ID = require(mongoose.Schema)

//making instance of the class

let userSchema= new mongoose.Schema({
    id : {type : mongoose.Schema.Types.ObjectId},
    name : String,
    email : String,
    password : String,

});

//creating a model

let userModel = mongoose.model('user', userSchema);
module.exports = userModel ;