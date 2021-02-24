import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api ='http://localhost:3000';

const store = new Vuex.Store({
    state: {
        nPages:null,
        limit:12,
        page:1,
        cards:[],
        card:{},
        searchString:''
    },
    getters: {
        CARDS(state){
            return state.cards;
        },
        CARD(state){
            return state.card;
        },
        N_PAGES(state){
            return state.nPages;
        },
        PAGE(state){
            return state.page;
        },
        LIMIT(state){
            return state.limit;
        },
        SEARCH_STRING(state){
            return state.searchString;
        }
    },
    mutations: {
        SET_DATA_TO_STATE(state,data){
            state.cards = data.cards;
            state.nPages = data.npages;
        },
        SET_DATA_TO_CARD(state,data){
            state.card = data;
        },
        SET_CURRENT_PAGE(state,page){
            state.page = page;
        },
        SET_NEW_LIMIT(state,limit){
            state.limit=limit;
        },
        SET_SEARCH_STRING(state,searchString){
            state.searchString=searchString;
        }
    },
    actions: {
        GET_FIRST_PAGE({commit}){
            axios.get(api
            ).then((data)=>{
                commit('SET_DATA_TO_STATE',data.data);
            }).catch((error)=>{
                console.log(error);
            })
        },
        GET_CERTAIN_PAGE({commit,getters},curPage){
            axios.get(api, {
                params: {
                    page: curPage-1,
                    limit: getters.LIMIT,
                    search : getters.SEARCH_STRING
                }
            }).then((data)=>{
                commit('SET_CURRENT_PAGE',curPage);
                commit('SET_DATA_TO_STATE',data.data);
            }).catch((error)=>{
                console.log(error);
            })
        },
        GET_CERTAIN_CARD({commit},curId){
            commit('SET_DATA_TO_CARD',{});
            axios.get(api+'/get/'+curId).then((data)=>{
                commit('SET_DATA_TO_CARD',data.data);
            }).catch((error)=>{
                console.log(error);
            })
        },
        GET_PAGE_WITH_NEW_LIMIT({commit,getters},limit){
            let newPage = Math.ceil(((getters.PAGE-1)*getters.LIMIT+1)/limit);
            commit('SET_NEW_LIMIT',limit);
            this.dispatch('GET_CERTAIN_PAGE',newPage);
        },
        GET_SEARCH_REQUEST({commit},searchString){
            commit('SET_SEARCH_STRING',searchString);
            this.dispatch('GET_CERTAIN_PAGE',1);
        },
        UNDO_SEARCH_REQUEST({commit}){
            commit('SET_SEARCH_STRING','');
            this.dispatch('GET_CERTAIN_PAGE',1);
        }
    }
});
export default store