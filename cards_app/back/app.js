const express = require('express');
const app = express();

const limit = 12;
const filePath = "./src/cards.json";
const jsonCards = require(filePath);
const nPages = Math.ceil(jsonCards.length / limit);
let page=0;
function shortCards(page){
    cards = jsonCards.slice(page*limit,page*limit+limit).map(
        (elem)=>{
            return {
                id: elem.id.$oid,
                avatar: elem.avatar,
                first_name: elem.first_name,
                last_name: elem.last_name
            }
        }
        );
    return cards;
}
app.get('/', function(request, response){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.send(JSON.stringify({
        cards: shortCards(0),
        n: nPages
    }))
});
app.listen(3000);