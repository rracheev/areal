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
function findCard(id){
    for(let i=0;i<jsonCards.length;i++){
        if (jsonCards[i].id.$oid===id){
            return jsonCards[i];
        }
    };
    return undefined;
}
app.get('/', function(request, response){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    let resCards;
    let page =request.query.page;
    if (page){
        resCards = shortCards(page);
    }
    else{
        resCards = shortCards(0);
    }
    response.send(JSON.stringify({
        cards: resCards,
        n: nPages
    }))
});
app.get('/get/:id', function(request, response){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    let resCard = findCard(request.params.id);
    response.send(JSON.stringify(resCard))
});
app.listen(3000);