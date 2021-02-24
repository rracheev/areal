<template >
    <router-link class="link"
        :to="{name: 'card',params:{id:cardItem.id}}">
        <ul class="cds-list-item">
            <li><img :src=cardItem.avatar></li>
            <li><h2>{{cardItem.first_name}} {{cardItem.last_name}}</h2></li>
        </ul>
    </router-link>
</template>

<script>

export default {
    name:'CdsListItem',
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
    .link{
        text-decoration: none;
    }
    .cds-list-item:hover{
        box-shadow: 0px 0px 15px 1px #000000 inset;
        background-color: #d7a668;
    }
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