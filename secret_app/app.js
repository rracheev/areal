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
	

app.use(express.static(__dirname+dir+"/js"));
app.use(express.static(__dirname+dir+"/css"));

app.get("/", function(req, res){
   res.sendFile(__dirname+dir+"/html/index.html");
});
app.get("/*", function(req, res){
    res.sendFile(__dirname+dir+"/html/content.html");
 });
app.post("/send", JSONParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    mongoose.connect("mongodb://localhost:27017/newdb", {useUnifiedTopology: true, useNewUrlParser: true});
    console.log(request.body);
    let new_text=new Text(request.body);
    new_text.save().then(
        function(txt){
            mongoose.disconnect();
            return response.send(JSON.stringify({url:txt._id}));
        }).catch(function (err){
            console.log(err);
            mongoose.disconnect();
        });

});
app.post("/getpass",JSONParser, function (req,res) {
    res.send(JSON.stringify({
        pass: 's'
    }));
});
app.listen(3000);