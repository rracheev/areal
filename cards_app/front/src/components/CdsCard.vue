<template >
    <div>
    <ul v-if="CARD" class="cds-card">
    <li><img :src=CARD.avatar></li>
    <li><h2>{{CARD.first_name}} {{CARD.last_name}}</h2></li>
    <li>Email: {{CARD.email}}</li>
    <li>Пол: {{CARD.gender}}</li>
    <li>Страна: {{CARD.country}}</li>
    <li>Город: {{CARD.city}}</li>
    <li>Компания: {{CARD.company}}</li>
    <li>Комментарий: {{CARD.comment}}</li>
    </ul>
    <router-link class="link"
        :to="{name: 'list'}"><button>Вернуться</button></router-link>
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
    .cds-card img{
        border: 10px solid #502c2c;
        border-radius: 50%;
    }
</style>