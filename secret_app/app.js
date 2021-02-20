const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const JSONParser = bodyParser.json();
const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {nanoid} = require('nanoid');
const app = express();

const password = '2p34Tqwe1a2Ab2KKc';
const server='http://localhost:3000'
const dir='/resource';
	
app.use(express.static(__dirname+dir+'/js'));
app.use(express.static(__dirname+dir+'/css'));

function encrypt(str){
    let cipher = crypto.createCipheriv('aes-128-ecb',password,'');
    let crypted = cipher.update(str,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(str){
    let  decipher = crypto.createDecipheriv('aes-128-ecb',password,'');
    let  decrypted = decipher.update(str,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const textSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid(6)
    },
    password: String,
    text: String
  });
const Text = mongoose.model('Text', textSchema);

async function getTxt(id){
    mongoose.connect('mongodb://localhost:27017/newdb', {useUnifiedTopology: true, useNewUrlParser: true});
    let answer= await Text.findOne({ _id:id});
    await mongoose.disconnect();
    if (answer===null){
        throw "Not Exist";
    }
    return answer;
}

async function deleteTxt(id){
    mongoose.connect('mongodb://localhost:27017/newdb', {useUnifiedTopology: true, useNewUrlParser: true});
    await Text.deleteOne({_id:id}, function (error, result) { 
        if (error){ 
            console.log(error) 
            throw 'Error'
        }else{ 
            console.log("Delete result:", result)  
        } 
    }); 
    await mongoose.disconnect();
}
app.get('/', function(request, response){
    response.sendFile(__dirname+dir+'/html/index.html');
});

app.get('/*', function(request, response){
    response.sendFile(__dirname+dir+'/html/content.html');
 });

app.post('/send', JSONParser, function (request, response) {
    if(!request.body) return response.send(new Error('Error 123'));
    mongoose.connect('mongodb://localhost:27017/newdb', {useUnifiedTopology: true, useNewUrlParser: true});
    let data=request.body;
    data.password=encrypt(data.password);
    data.text=encrypt(data.text);
    let new_text=new Text(data);
    console.log('body_enc:',request.body)
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

app.post('/verify', JSONParser, function(request, response){
    let id=request.rawHeaders[21].split('/')[3];
    let pass= encrypt(request.body.password);
    getTxt(id).then(function(txt){
        console.log(txt);
        if(pass!=txt.password){
            response.status('403').send();
        }
        else{
            response.send(JSON.stringify({text:decrypt(txt.text)}));
        }
    }).catch(function(){
        response.status('404').send();
    });
});

app.post('/delete', JSONParser, function(request, response){
    let id=request.rawHeaders[21].split('/')[3];
    let pass= encrypt(request.body.password);
    getTxt(id).then(function(txt){
        console.log(txt);
        if(pass!=txt.password){
            response.status('403').send();
        }
        else{
            deleteTxt(id).then(function(){
                console.log('Well done')
                response.status('200').send();
            }).catch(function(){
                console.log('Delete Error')
                response.status('400').send();
            });
        }
    }).catch(function(){
        response.status('404').send();
    });
});

app.listen(3000);