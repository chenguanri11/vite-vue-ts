import { createRouter,createWebHistory} from 'vue-router'
import type { App } from 'vue'
import {routes} from '../routes'
import {createRouterGuide} from '../guide'


export const router = createRouter({
  history:createWebHistory(),
  routes
})

export async function setupRouter(app:App){
  app.use(router);
  // 路由守卫
  createRouterGuide(router)
  await router.isReady()
}


