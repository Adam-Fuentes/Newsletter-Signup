const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));//código necesario para el body parser
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var firstName = req.body.fisrtName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    console.log(firstName);
});

app.listen(3000, function(){
    console.log("Server is running in port 3000");
});