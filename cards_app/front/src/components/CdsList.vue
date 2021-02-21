<template >
    <div class='cds-list'>
        <cds-list-item v-for="card in cards" 
        :key="card.id.$oid"
        :cardItem="card"
         />
    </div>
</template>

<script>
import CdsListItem from './CdsListItem';
export default {
   name:'cds-list',
   components:{ 
       CdsListItem
   },
   props: {},
   data() {
       return {
           cards:[{"id":{"$oid":"6032d562fc13ae08b1000000"},"first_name":"Merle","last_name":"Carwithim","email":"mcarwithim0@guardian.co.uk","gender":"Bigender","country":"Mexico","city":"Fovissste","company":"Linkbridge","comment":"ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat","avatar":"https://robohash.org/aliquidutfacere.png?size=300x300&set=set1"},
{"id":{"$oid":"6032d562fc13ae08b1000001"},"first_name":"Starlin","last_name":"Marciek","email":"smarciek1@tmall.com","gender":"Polygender","country":"Czech Republic","city":"Dobroměřice","company":"Eidel","comment":"imperdiet et commodo vulputate justo in blandit ultrices enim","avatar":"https://robohash.org/adipisciconsequaturvel.png?size=300x300&set=set1"},
{"id":{"$oid":"6032d562fc13ae08b1000002"},"first_name":"Blythe","last_name":"Windibank","email":"bwindibank2@cargocollective.com","gender":"Polygender","country":"Indonesia","city":"Jetis","company":"Jetpulse","comment":"dolor sit amet consectetuer adipiscing elit proin interdum mauris non","avatar":"https://robohash.org/quaeratblanditiisiure.png?size=300x300&set=set1"},
{"id":{"$oid":"6032d562fc13ae08b1000003"},"first_name":"Morgen","last_name":"Lelande","email":"mlelande3@xrea.com","gender":"Non-binary","country":"Cuba","city":"Las Tunas","company":"Jatri","comment":"quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus","avatar":"https://robohash.org/teneturrerumiusto.png?size=300x300&set=set1"},
{"id":{"$oid":"6032d562fc13ae08b1000004"},"first_name":"Ann","last_name":"Iacovozzo","email":"aiacovozzo4@merriam-webster.com","gender":"Male","country":"Poland","city":"Drawsko Pomorskie","company":"Quamba","comment":"magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus","avatar":"https://robohash.org/remcommodiest.png?size=300x300&set=set1"},
{"id":{"$oid":"6032d562fc13ae08b1000005"},"first_name":"Goldy","last_name":"Mulleary","email":"gmulleary5@jugem.jp","gender":"Male","country":"Iceland","city":"Hafnarfjörður","company":"Jabberstorm","comment":"turpis a pede posuere nonummy integer non velit donec","avatar":"https://robohash.org/animiomnisculpa.png?size=300x300&set=set1"},
{"id":{"$oid":"6032d562fc13ae08b1000006"},"first_name":"Jaine","last_name":"Ascough","email":"jascough6@storify.com","gender":"Genderfluid","country":"China","city":"Xambabazar","company":"Kwideo","comment":"orci mauris lacinia sapien quis libero nullam sit","avatar":"https://robohash.org/autvoluptatibusveniam.png?size=300x300&set=set1"}]
        }
    },
   computed:{}
}
</script>

<style>
    .cds-list{
        color: black;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));;
        grid-gap: 25px;
        margin: 25px;
    }
</style>