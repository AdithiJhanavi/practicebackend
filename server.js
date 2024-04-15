const express = require('express');
require('dotenv').config()
const mongoose = require("mongoose")
//endpoint
let app= express();
app.get("/", (req,res)=>{
    res.send("Working...")
})
// using mongo connection
mongoose.connect(process.env.MONGODATA_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("connected to mongodb")
})
.catch((error)=>{
    console.log("error", error)
}); 
//ending mongo connection