import {RouteRecordRaw} from 'vue-router'
import Login from '@/views/login/index.vue'

const loginRoute:RouteRecordRaw[] = [
  {
    path:'/',
    name:'Login',
    component:Login
  }
]

export default loginRoute

