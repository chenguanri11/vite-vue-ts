import { createApp } from 'vue';
import App from './App.vue'
import { setupRouter } from './router';
import { setupStore } from './store';


async function setupApp (){
  const app = createApp(App)

  /** 挂载store */
  setupStore(app)
  /** 挂载路由 */
  await setupRouter(app)

  app.mount('#app')
}

setupApp()

