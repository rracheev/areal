const express = require('express');
const app = express();

const serverLimit = 12;
const filePath = "./src/cards.json";
const serverArrayCards = require(filePath);
const serverNPages = Math.ceil(serverArrayCards.length / serverLimit);

function shortCards(jsonCards,page,limit){
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
    for(let i=0;i<serverArrayCards.length;i++){
        if (serverArrayCards[i].id.$oid===id){
            return serverArrayCards[i];
        }
    };
    return undefined;
}

function getShortCards(arrayCards,page,limit){
    if (page){
        return shortCards(arrayCards,page,limit);
    }
        return shortCards(arrayCards,0,limit);
}

function getConditionsCards(searchString){
    return serverArrayCards.filter((elem)=>{
        for (key in elem){
            if (key=='id'){
                if (elem[key].$oid==searchString){
                    return true;
                }
            }
            else if (elem[key]==searchString){
                return true;
            }
        }
        return false;
    })
}

function getResponseObject(page,limit,search){
    let newLimit = (limit) ? Number(limit) : serverLimit;
    let arrayCards = search ? getConditionsCards(search) : serverArrayCards;

    let nPages = (limit) ? Math.ceil(arrayCards.length / newLimit) : serverNPages;
    let responseCards =  getShortCards(arrayCards,page,newLimit)

    return {npages: nPages, cards: responseCards}
}

app.get('/', function(request, response){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    let page = request.query.page;
    let limit = request.query.limit;
    let search = request.query.search;
    
    let resObj = getResponseObject(page,limit,search);
    response.send(JSON.stringify(resObj));
});

app.get('/get/:id', function(request, response){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    let resCard = findCard(request.params.id);
    response.send(JSON.stringify(resCard))
});

app.listen(3000);