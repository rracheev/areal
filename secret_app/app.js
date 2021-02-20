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
	
app.use(express.static(__dirname+dir+"/js"));
app.use(express.static(__dirname+dir+"/css"));

app.get("/", function(request, response){
    response.sendFile(__dirname+dir+"/html/index.html");
});

app.get("/*", function(request, response){
    response.sendFile(__dirname+dir+"/html/content.html");
 });

async function getTxt(id){
    mongoose.connect("mongodb://localhost:27017/newdb", {useUnifiedTopology: true, useNewUrlParser: true});
    return await Text.findOne({ _id
        : id});
}

app.post("/verify", JSONParser, function(request, response){
    let id=request.rawHeaders[21].split('/')[3];
    console.log(id)
    let pass= request.body.password; 
    
    getTxt().then(function(txt){
        response.send(JSON.stringify({text:txt.text}));
    }).catch(function(e){
        response.sendStatus(400);
    });

app.post("/send", JSONParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    mongoose.connect("mongodb://localhost:27017/newdb", {useUnifiedTopology: true, useNewUrlParser: true});
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
app.post("/getpass",JSONParser, function (request,response) {
    response.send(JSON.stringify({
        pass: 's'
    }));
});
app.listen(3000);