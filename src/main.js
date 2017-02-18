import Vue from 'vue'
import App from './App'


// 路由
import router from './router/'

import resource from 'vue-resource'

//图片懒加载
import VueLazyload from 'vue-lazyload'

import Vui from './plugin/all/'


// 公用css
import "./scss/index.scss"

// 兼容ios active 效果
document.body.addEventListener('touchstart', function () {});  


Vue.use(resource)
Vue.use(Vui)

      
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})

router.beforeEach((to, from, next) => {
  
  document.title = to.meta.title;
  next();
})


export { app, router }
