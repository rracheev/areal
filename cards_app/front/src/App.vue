<template>
  <div id='app'>
    <cds-main />
  </div>
</template>

<script>
import CdsMain from './components/CdsMain';
import {mapActions} from 'vuex';
export default {
   name: 'App',
   components: {
      CdsMain
   },
   props: {},
   methods:{
      ...mapActions([
         'GET_FIRST_PAGE'
      ]),
   },
   mounted(){
      this.GET_FIRST_PAGE()
   }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
