import type {Router} from 'vue-router'

export function createRouterGuide(router:Router){
  router.beforeEach((to,from,next)=>{
    next()
  })
}