<template>
    <div class='cds-main'>
        <h1>Карточки</h1>
        <cds-search-bar></cds-search-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import CdsSearchBar from './CdsSearchBar';
export default {
    name:'CdsMain',
    components:{ 
        CdsSearchBar
    },
    data(){
        return{}
    }
}
</script>

<style>
.cds-main {
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
}
.cds-main button{
    padding: 5px 10px;
    margin: 0 10px;
    background-color:burlywood;
    border-radius: 5px;
    font-size: 18px;
}
</style>