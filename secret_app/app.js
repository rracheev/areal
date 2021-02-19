const express = require("express");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const JSONParser = bodyParser.json();
const fs = require('fs');
const { subtle } = require('crypto').webcrypto;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const {nanoid} = require("nanoid");
const app = express();

const dir="/resource";

const textSchema = new Schema({
    _id: {
      type: String,
      default: () => nanoid(6)
    },
    password: String,
    text: String
  });
const Text = mongoose.model("Text", textSchema);
const text1 = new Text({
    password: "qwerrty",
    text: "XNJJSD"
});
	
mongoose.connect("mongodb://localhost:27017/newdb", {useUnifiedTopology: true, useNewUrlParser: true});


app.use(express.static(__dirname+dir+"/js"));
app.use(express.static(__dirname+dir+"/css"));

app.get("/", function(req, res){
   res.sendFile(__dirname+dir+"/html/index.html");
});
app.post("/send", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    let new_text=new Text(request.body);
    new_text.save()
});
app.post("/getpass",JSONParser, function (req,res) {
    res.send(JSON.stringify({
        pass: 's'
    }));
});
app.listen(3000);