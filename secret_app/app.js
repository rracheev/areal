const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const JSONParser = bodyParser.json();
const fs = require('fs');
const { subtle } = require('crypto').webcrypto;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {nanoid} = require('nanoid');
const app = express();

const server='http://localhost:3000'
const dir='/resource';
	
app.use(express.static(__dirname+dir+'/js'));
app.use(express.static(__dirname+dir+'/css'));

const textSchema = new Schema({
    _id: {
      type: String,
      default: () => nanoid(6)
    },
    password: String,
    text: String
  });
const Text = mongoose.model('Text', textSchema);

app.get('/', function(request, response){
    response.sendFile(__dirname+dir+'/html/index.html');
});

app.get('/*', function(request, response){
    response.sendFile(__dirname+dir+'/html/content.html');
 });

async function getTxt(id){
    mongoose.connect('mongodb://localhost:27017/newdb', {useUnifiedTopology: true, useNewUrlParser: true});
    let answer= await Text.findOne({ _id
        : id});
    mongoose.disconnect();
    return answer;
}

app.post('/verify', JSONParser, function(request, response){
    let id=request.rawHeaders[21].split('/')[3];
    console.log('id:',id)
    let pass= request.body.password;
    getTxt(id).then(function(txt){  
        if(pass!=text.password){
            response.send(new Error('INCORRECT_PASS'));
        }
        else{
            response.send(JSON.stringify({text:txt.text}));
        }
    }).catch(function(){
        console.log('Error');
        response.send(new Error('DATA_NOT_EXIST'));
    });
});
app.post('/send', JSONParser, function (request, response) {
    if(!request.body) return response.send(new Error('Error 123'));
    mongoose.connect('mongodb://localhost:27017/newdb', {useUnifiedTopology: true, useNewUrlParser: true});
    let new_text=new Text(request.body);
    console.log('body:',request.body)
    new_text.save().then(
        function(txt){
            console.log('txt:',txt)
            mongoose.disconnect();
            response.send(JSON.stringify({url:server+'/'+txt._id}));
        }).catch(function (error){
            console.log(error);
            mongoose.disconnect();
            response.send(JSON.stringify({url:undefined}));
        });

});
app.post('/getpass',JSONParser, function (request,response) {
    response.send(JSON.stringify({
        pass: 's'
    }));
});

app.listen(3000);