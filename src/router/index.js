import { createRouter, createWebHistory, RouterLink, RouterView } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Quotation from '@/views/QuotationView.vue'

const router = createRouter(
    {
        history:createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/quotation',
                name: 'quotation',
                component: Quotation,
            },
        ],
    }
)

export default router