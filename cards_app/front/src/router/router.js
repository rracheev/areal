import Vue from 'vue';
import Router from 'vue-router';
import CdsList from '../components/CdsList'
import CdsCard from '../components/CdsCard'

Vue.use(Router);

const router = new Router({
    routes:[
        {
            name: 'list',
            path: '/',
            component:CdsList
        },
        {
            name: 'card',
            path: '/:id',
            component: CdsCard,
            props: true
        } 
    ]
})
export default router;