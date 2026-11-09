import { createRouter, createWebHistory } from "vue-router"
import CardapioView from '.../views/CardapioView.vue'

const router = creatRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "cardapio", component: CardapioView }
    ],
})