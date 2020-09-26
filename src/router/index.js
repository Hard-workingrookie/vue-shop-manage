import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserInfo from '../components/UserInfo.vue'
import Video from '../components/VideoManage.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/indexs',
    children: [
      {
        path: '/userinfo',
        name: 'UserInfo',
        component: UserInfo
      },
      {
        path: '/video',
        name: 'Video',
        component: Video
      },
      {
        path: '/indexs',
        name: 'Index',
        component: Index
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
