const mongoose = require("mongoose")

const bookmodel = new mongoose.Schema({
    name:String,
    author:String,
    price:String,
    language:String,
})

const database_ki_book = mongoose.model("bookiii", bookmodel)

module.exports =  database_ki_book 
