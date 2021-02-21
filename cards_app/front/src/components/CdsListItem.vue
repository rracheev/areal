<template >
    <div class="cds-list-item">
    <h1>ААА</h1>
    <p>{{cardItem.id}}</p>
    <p>{{cardItem.first_name}}</p>
    <p>{{cardItem.last_name}}</p>
    <p>{{cardItem.ip_address}}</p>
    </div>
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
    .cds-list-item{
        border: solid 3px black;
        background-color: burlywood;
    }
</style>