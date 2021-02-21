<template >
    <div class='cds-list'>
        <cds-list-item v-for="card in cards" 
        :key="card.id"
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
           cards:[
         {
         "id": 1,
         "first_name": "Mylo",
         "last_name": "Stammler",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000014"
         }
         },
         {
         "id": 2,
         "first_name": "Daron",
         "last_name": "Cridlon",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000015"
         }
         },
         {
         "id": 3,
         "first_name": "Giavani",
         "last_name": "Eastes",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000016"
         }
         },
         {
         "id": 4,
         "first_name": "Rutger",
         "last_name": "Founds",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000017"
         }
         },
         {
         "id": 5,
         "first_name": "Theo",
         "last_name": "Kersaw",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000018"
         }
         },
         {
         "id": 6,
         "first_name": "Filberto",
         "last_name": "Margeram",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000019"
         }
         },
         {
         "id": 7,
         "first_name": "Tami",
         "last_name": "Leadley",
         "ip_address": {
            "$oid": "6031befdfc13ae538800001a"
         }
         },
         {
         "id": 8,
         "first_name": "Alden",
         "last_name": "Gammack",
         "ip_address": {
            "$oid": "6031befdfc13ae538800001b"
         }
         },
         {
         "id": 9,
         "first_name": "Melva",
         "last_name": "Ratley",
         "ip_address": {
            "$oid": "6031befdfc13ae538800001c"
         }
         },
         {
         "id": 10,
         "first_name": "Cinderella",
         "last_name": "Foxley",
         "ip_address": {
            "$oid": "6031befdfc13ae538800001d"
         }
         },
         {
         "id": 11,
         "first_name": "Cordi",
         "last_name": "Tomsen",
         "ip_address": {
            "$oid": "6031befdfc13ae538800001e"
         }
         },
         {
         "id": 12,
         "first_name": "Chlo",
         "last_name": "Matskiv",
         "ip_address": {
            "$oid": "6031befdfc13ae538800001f"
         }
         },
         {
         "id": 13,
         "first_name": "Anatol",
         "last_name": "Jizhaki",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000020"
         }
         },
         {
         "id": 14,
         "first_name": "Jania",
         "last_name": "Stares",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000021"
         }
         },
         {
         "id": 15,
         "first_name": "Vivien",
         "last_name": "Mincini",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000022"
         }
         },
         {
         "id": 16,
         "first_name": "Filide",
         "last_name": "Gwyn",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000023"
         }
         },
         {
         "id": 17,
         "first_name": "Aviva",
         "last_name": "Tebald",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000024"
         }
         },
         {
         "id": 18,
         "first_name": "Tilda",
         "last_name": "Mowatt",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000025"
         }
         },
         {
         "id": 19,
         "first_name": "Waneta",
         "last_name": "Cadwallader",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000026"
         }
         },
         {
         "id": 20,
         "first_name": "Kippar",
         "last_name": "Poulden",
         "ip_address": {
            "$oid": "6031befdfc13ae5388000027"
         }
         }
         ]
       }
    },
   computed:{}
}
</script>

<style>
    .cds-list{
        color: black;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 25px;
        padding: 25px;
    }
</style>