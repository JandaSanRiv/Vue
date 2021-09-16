import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import OrderFastFood from '../views/OrderFastFood.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/order',
        name: 'Order',
        // component: () => import(/* webpackChunckName: "order */ '../components/OrderFastFood.vue')
        component: OrderFastFood
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router