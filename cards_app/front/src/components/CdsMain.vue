<template>
    <div class='cds-main'>
        <h1>Карточки</h1>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name:'сds-main',
    props: {},
    data(){
        return{}
   },
    computed:{}
}
</script>

<style>
.cds-main {
    font-size: 18px;
}
.cds-main button{
    padding: 5px 10px;
    margin: 10px;
    background-color:burlywood;
    border-radius: 5px;
    font-size: 18px;
}
</style>