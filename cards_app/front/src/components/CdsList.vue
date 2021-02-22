<template >
    <div>
        <div class='cds-list'>
        <cds-list-item 
            v-for="card in CARDS" 
            :key="card.id"
            :cardItem="card"
        />
        </div>
        <button v-if="PAGE>1" @click='pageBackward'>Назад</button>
        <span>Страница {{PAGE}} из {{N_PAGES}}</span>
        <button v-if="PAGE<N_PAGES" @click='pageForward'>Вперед</button>
    </div>
</template>

<script>
import CdsListItem from './CdsListItem';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'cds-list',
    components:{ 
        CdsListItem
    },
    props: {},
    data() {
        return {}
    },
    computed:{
        ...mapGetters([
            'CARDS',
            'N_PAGES',
            'PAGE'
        ])
    },
    methods:{
        ...mapActions([
            'GET_CERTAIN_PAGE'
        ]),
        pageForward(){
            this.GET_CERTAIN_PAGE(this.PAGE+1);
        },
        pageBackward(){
            this.GET_CERTAIN_PAGE(this.PAGE-1);
        }
    },
    actions:{
    }
}
</script>

<style>
    .cds-list{
        width: 80%;
        margin: 0 auto;
        color: black;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));;
        grid-gap: 25px;
        margin: 25px auto;
    }
</style>