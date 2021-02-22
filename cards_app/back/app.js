const e = require('express');
const express = require('express');
const app = express();

const limit = 12;
const filePath = "./src/cards.json";
const jsonCards = require(filePath);
const nPages = Math.ceil(jsonCards.length / limit);
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
    let res_cards;
    let page =request.query.page;
    if (page){
        res_cards = shortCards(page);
    }
    else{
        res_cards = shortCards(0);
    }
    response.send(JSON.stringify({
        cards: res_cards,
        n: nPages
    }))
});

app.listen(3000);