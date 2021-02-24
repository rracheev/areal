<template >
    <div>
        <div class='limit'>
            <span class='get-limit'>{{limitValue}}</span>
            <span>6</span>
            <input type='range' min='6' max ='21' step='3' v-model.number='limitValue'
               @change='newLimit(limitValue)'>
            <span>21</span>
        </div>
        <div class='cds-list'>
        <cds-list-item 
            v-for='card in CARDS' 
            :key='card.id'
            :cardItem='card'
        />
        </div>
        <div class="list-move-buttons">
            <button v-if='PAGE>1' @click='pageBackward'>Назад</button>
            <span>Страница {{PAGE}} из {{N_PAGES}}</span>
            <button v-if='PAGE<N_PAGES' @click='pageForward'>Вперед</button>
        </div>
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
        return {
            limitValue : ''
        }
    },
    computed:{
        ...mapGetters([
            'CARDS',
            'N_PAGES',
            'PAGE',
            'LIMIT'
        ])
    },
    methods:{
        ...mapActions([
            'GET_CERTAIN_PAGE',
            'GET_PAGE_WITH_NEW_LIMIT'
        ]),
        pageForward(){
            this.GET_CERTAIN_PAGE(this.PAGE+1);
        },
        pageBackward(){
            this.GET_CERTAIN_PAGE(this.PAGE-1);
        },
        newLimit(newLimit){
            this.GET_PAGE_WITH_NEW_LIMIT(newLimit);
        }
    },
    actions:{
    },
    mounted(){
        this.limitValue=this.LIMIT
    }
}
</script>

<style>
    .cds-list{
        margin: 0 auto;
        color: black;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));;
        grid-gap: 25px;
        margin: 25px auto;
    }
    .limit .get-limit{
        display:block;
    }
    .list-move-buttons{
        margin: 25px auto;
    }
</style>