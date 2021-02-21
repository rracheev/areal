<template>
    <div class='cds-main'>
        <h1>Карточки</h1>
        <cds-list />
    </div>
</template>

<script>
import CdsList from './CdsList';
export default {
    name:'сds-main',
    components:{
      CdsList
    },
    props: {},
    data(){
      return{
         title: "FFF",
      }
   },
    computed:{},
    mounted() {
      console.log("main is here")
    }
}
</script>

<style>
    .cds-main{
    }
</style>