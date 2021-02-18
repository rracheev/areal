const express = require("express");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const JSONParser = bodyParser.json();
const fs = require('fs');
const { subtle } = require('crypto').webcrypto;

const app = express();

const dir="/resource";

app.use(express.static(__dirname+dir+"/js"));
app.use(express.static(__dirname+dir+"/css"));

 
async function generateKey(length = 256) {
    const key = await subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 512,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256"
        },
        true,
        ["encrypt", "decrypt"]
      );
    return key;
  }

  console.log(generateKey())
app.get("/", function(req, res){
   res.sendFile(__dirname+dir+"/html/index.html");
});
app.post("/send", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    console.log(request.body.pass1);
});
app.post("/getpass",JSONParser, function (req,res) {
    res.send(JSON.stringify({
        pass: 's'
    }));
});
app.listen(3000);