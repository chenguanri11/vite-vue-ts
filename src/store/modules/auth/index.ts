import { defineStore } from 'pinia';
import { store } from '../../index';

/** 定义参数 */
interface AuthStore {
  token: string;
}

const authStore = defineStore({
  /** 唯一区分标识 */
  id: 'auth-store',
  state: (): AuthStore => {
    return {
      token: ''
    };
  },
  /** 获取状态 */
  getters: {},
  /** 设置状态或方法 */
  actions: {}
});

export default function useAuthStore() {
  return authStore(store);
}
