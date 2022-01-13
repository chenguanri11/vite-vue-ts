import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径指向
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: './', // 打包路径
  server: {
    // host:'0,0,0,0',//和别人对接时访问本地ip
    port: 4000, // 端口号
    open: true, // 设置服务器启动时打开浏览器
    cors: true // 是否允许跨域
  }
});
