import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api ='http://localhost:3000';

const store = new Vuex.Store({
    state: {
        n:null,
        page:0,
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
        }
    },
    actions: {
        GET_FIRST_PAGE({commit}){
            return axios.get(api
            ).then((data)=>{
                commit('SET_DATA_TO_STATE',data.data);
            }).catch((error)=>{
                console.log(error)
            })
        },
        GET_CERTAIN_PAGE({commit},cur_page){
            return axios.get(api, {
                params: {
                    page: cur_page
                }
            }).then((data)=>{
                commit('SET_CURRENT_PAGE',cur_page);
                commit('SET_DATA_TO_STATE',data.data);
            }).catch((error)=>{
                console.log(error)
            })
        },
        GET_CERTAIN_CARD({commit},elem){
            return axios.get(api+"/get/:id/"+elem
            ).then((data)=>{
                commit('SET_DATA_TO_STATE',data);
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
});
export default store