import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api ='http://localhost:3000';

const store = new Vuex.Store({
    state: {
        n:null,
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
        }
    },
    mutations: {
        SET_DATA_TO_STATE(state,data){
            state.cards= data.cards;
            state.n= data.n;
            console.log(state.cards)
        },
        SET_DATA_TO_CARD(state,data){
            state.card= data;
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
        GET_CERTAIN_PAGE({commit,page}){
            return axios.get(api+"/?page="+page
            ).then((data)=>{
                commit('SET_DATA_TO_STATE',data);
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