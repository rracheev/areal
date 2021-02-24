<template >
    <div>
        <div class='cds-card'>
            <img :src=CARD.avatar>
            <ul v-if='CARD' class='card-list'>
                <li><h2>{{CARD.first_name}} {{CARD.last_name}}</h2></li>
                <li>Email: {{CARD.email}}</li>
                <li>Пол: {{CARD.gender}}</li>
                <li>Страна: {{CARD.country}}</li>
                <li>Город: {{CARD.city}}</li>
                <li>Компания: {{CARD.company}}</li>
                <li>Комментарий: {{CARD.comment}}</li>
            </ul>
        </div>
        <router-link class='link'
            :to='{name: "list"}'>
            <button>Вернуться</button>
        </router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'CdsCard',
    data(){
      return{}
    },
    computed:{
        ...mapGetters([
            'CARD'
        ])
    },
    props: {
        id:{
            type: String,
            default(){
                return ''
            }
        } 
    },
    methods:{
        ...mapActions([
            'GET_CERTAIN_CARD'
        ]),
   },
   mounted(){
        this.GET_CERTAIN_CARD(this.id);
   }
}
</script>

<style>
    .cds-card{
        display: flex;
        flex-wrap: wrap;
        color: #2c3e50;
        background-color: burlywood;  
        box-shadow: 5px 3px 10px 0 #000000b3;
        border-radius: 15px;
        min-width: 350px;
        align-items: center;
        justify-content: center;
        text-align: start;
        margin: 25px auto;
    }
    .cds-card img{
        border: 10px solid #502c2c;
        margin: 15px;
    }
    .cds-card .card-list{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 1;
    }
    .cds-card li {
        margin: 10px;
    }
    .cds-card li h2{
        margin:0;
    }
    .cds-card li:nth-child(1){
        align-self: center;
    }
</style>