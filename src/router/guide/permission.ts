import type {RouteLocationNormalized,NavigationGuardNext, RouteRecordRedirectOption} from 'vue-router'


/**
 * 
 * @param to 进入到哪个路由去  
 * @param from 从哪个路由离开
 * @param next 路由的控制参数，常用的有next(true)和next(false)
 */
export function handlePagePermission(
  to:RouteLocationNormalized,
  from:RouteLocationNormalized,
  next:NavigationGuardNext
){
 
}