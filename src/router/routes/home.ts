import {RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home/index.vue'

const homeRoute:RouteRecordRaw[] = [
  {
    path:'/',
    name:'Home',
    component:Home
  }
]

export default homeRoute

