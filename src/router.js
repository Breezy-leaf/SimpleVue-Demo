import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import ContactView from './components/ContactView.vue'

console.log(HomeView)
//
//定义路由规则
const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView }
]
//创建路由器对象
const router = createRouter({
    history: createWebHistory(),
    routes,
})
//导出路由器，这样其他文件（比如main.js）才能用它
export default router





// import { createWebHistory, createRouter } from "vue-router";
// import AboutView from "./components/AboutView.vue";
// import HomeView from "./components/HomeView.vue";
// import ContactView from "./components/ContactView.vue";

// const routes = [{ path: '/', component: 'HomeView' }
//     , { path: '/about', component: 'AboutView' }
//     , { path: '/contact', component: 'ContactView' }]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })
// export default router



