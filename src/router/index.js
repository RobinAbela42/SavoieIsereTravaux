import { createRouter, createWebHistory, RouterLink, RouterView } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Quotation from '@/views/QuotationView.vue'
import Location from '@/views/LocationView.vue'
import Contact from '@/views/ContactView.vue'
import Engagement from '@/views/EngagementView.vue'

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
            {
                path: '/location',
                name: 'location',
                component: Location,
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
            },
            {
                path: '/engagement',
                name: 'engagement',
                component: Engagement,
            },
        ],
    }
)

export default router