import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/index.vue') 
const Category = () => import('@/views/category/index.vue')
const Cart = () => import('@/views/cart/index.vue')
const Profile = () => import('@/views/profile/index.vue')
const Detail = () => import('@/views/detail/index.vue')

// 1. 安装插件
Vue.use(Router)

// 2. 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
  ,
  {
    path: '/detail/:iid',
    component: Detail
  }

]
const router = new Router({
  routes,
  mode: 'history'
})

// 3. 导出router
export default router