import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api ='http://localhost:3000';

const store = new Vuex.Store({
    state: {
        n:null,
        limit:12,
        page:1,
        cards:[],
        card:{}
    },
    getters: {
        CARDS(state){
            return state.cards;
        },
        CARD(state){
            return state.card;
        },
        N_PAGES(state){
            return state.n;
        },
        PAGE(state){
            return state.page;
        },
        LIMIT(state){
            return state.limit;
        }
    },
    mutations: {
        SET_DATA_TO_STATE(state,data){
            state.cards = data.cards;
            state.n = data.n;
        },
        SET_DATA_TO_CARD(state,data){
            state.card = data;
        },
        SET_CURRENT_PAGE(state,page){
            state.page = page;
        },
        SET_NEW_LIMIT(state,limit){
            state.limit=limit;
        }
    },
    actions: {
        GET_FIRST_PAGE({commit}){
            return axios.get(api
            ).then((data)=>{
                commit('SET_DATA_TO_STATE',data.data);
            }).catch((error)=>{
                console.log(error);
            })
        },
        GET_CERTAIN_PAGE({commit,getters},curPage){
            return axios.get(api, {
                params: {
                    page: curPage-1,
                    limit: getters.LIMIT
                }
            }).then((data)=>{
                commit('SET_CURRENT_PAGE',curPage);
                commit('SET_DATA_TO_STATE',data.data);
            }).catch((error)=>{
                console.log(error);
            })
        },
        GET_CERTAIN_CARD({commit},curId){
            return axios.get(api+'/get/'+curId).then((data)=>{
                commit('SET_DATA_TO_CARD',data.data);
            }).catch((error)=>{
                console.log(error);
            })
        },
        GET_LIST_WITH_NEW_LIMIT({commit,getters},limit){
            let newPage = Math.ceil(((getters.PAGE-1)*getters.LIMIT+1)/limit);
            commit('SET_NEW_LIMIT',limit);
            this.dispatch('GET_CERTAIN_PAGE',newPage);
        }
    }
});
export default store