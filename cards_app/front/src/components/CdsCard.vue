<template >
    <ul class="cds-card">
    <li><img :src=cardItem.avatar></li>
    <li><h2>{{cardItem.first_name}} {{cardItem.last_name}}</h2></li>
    <li>Email: {{cardItem.email}}</li>
    <li>Пол: {{cardItem.gender}}</li>
    <li>Страна: {{cardItem.country}}</li>
    <li>Город: {{cardItem.city}}</li>
    <li>Компания: {{cardItem.company}}</li>
    <li>Комментарий: {{cardItem.comment}}</li>
    </ul>
</template>

<script>

export default {
    name:'CdsCard',
    props: {
        cardItem:{
            type: Object,
            default(){
                return {}
            }
        } 
    },
    data(){
      return{}
    },
    computed:{}
}
</script>

<style>
    .cds-list-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #2c3e50;
        background-color: burlywood;  
        box-shadow: 5px 3px 10px 0 #000000b3;
        border-radius: 15px;
        list-style: none;
        margin: 0;
        padding: 10px;
    }
    .cds-list-item img{
        border: 10px solid #502c2c;
        border-radius: 50%;
    }
</style>