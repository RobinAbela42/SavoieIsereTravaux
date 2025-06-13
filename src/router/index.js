import { createRouter, createWebHistory, RouterLink, RouterView } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Quotation from '@/views/QuotationView.vue'
import Contact from '@/views/ContactView.vue'
import Politique from '@/views/PolitiqueView.vue'
import Mentions from '@/views/MentionsView.vue'

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
                path: '/contact',
                name: 'contact',
                component: Contact,
            },
            {
                path: '/mentionslegales',
                name: 'mentionslegales',
                component: Mentions,
            },
            {
                path: '/politiquedeconfidentialite',
                name: 'politiquedeconfidentialite',
                component: Politique,
            },

        ],
    }
)

export default router