<template>
    <div>
        <div v-if='!SEARCH_STRING' class='cds-search-bar'>
            <label for='seatch-string'>Поиск</label>
            <input id='seatch-string' class='seatch-string' type='search' v-model="searchString">
            <button @click="goSearch()">Искать</button>
        </div>
        <div v-if='SEARCH_STRING' class='cds-search-bar'>
            <label>Запрос на поиск:</label>
            <output class="out-seatch-string">{{SEARCH_STRING}}</output>
            <button @click='goList()'>Сбросить</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'CdsSearchBar',
    data(){
        return{
            searchString:''
        }
    },
    computed:{
        ...mapGetters([
            'SEARCH_STRING'
        ])
    },
    methods:{
        ...mapActions([
            'GET_SEARCH_REQUEST',
            'UNDO_SEARCH_REQUEST'
        ]),
        goSearch(){
            this.GET_SEARCH_REQUEST(this.searchString);
            this.searchString='';
            if (this.$route.path != '/'){
                this.$router.push('/');
            }
        },
        goList(){
            this.UNDO_SEARCH_REQUEST();
        }
    }
}
</script>

<style>
    .cds-search-bar{
        border-radius: 15px;
        background-color: burlywood;
        padding:10px;
        margin: 25px auto;
        box-shadow: 5px 3px 10px 0 #000000b3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cds-search-bar label {
        font-size: 20px;
        margin: 0 10px;
        font-weight: bold;
    }
    .cds-search-bar .seatch-string{
        width:50%;
        font-size: 18px;
    }
    .cds-search-bar .out-seatch-string{
        font-size: 20px;
        font-style: italic;
    }
</style>