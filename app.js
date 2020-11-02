const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));//código necesario para el body parser

app.get("/", function(req, res){
    res.send("Working...");
});

app.listen(3000, function(){
    console.log("Server is running in port 3000");
});