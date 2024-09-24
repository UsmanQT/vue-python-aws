import { createRouter, createWebHistory } from 'vue-router'
import Ping from '../components/ping.vue'
import Books from '../components/Books.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/ping',
      name: 'ping',
      component: Ping
    },
    
  ]
})

export default router
