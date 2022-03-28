import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router;

// manggil manual 
//import About from '../pages/about/index.vue'
//import User from '../pages/user/index.vue'


//const routes = [
  //{path: '/admin', component: Admin},
  //{path: '/user', component: User},
  //{path: '/about', component: About }
//]



