// 核心入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import App from './App'
//相关配置引入
import routes from './route'
import components from './components/component'

//图片库引入
import './lib/iconfont'

//自定义CSS引入
import './css/normalize'
import './css/style'

//jquery引入
import $ from 'jquery'


Vue.use(VueRouter)
Vue.use(VueResource)
//设置vue-resource的post默认Content-Type
Vue.http.options.emulateJSON = true;
//设置全局jquery入口
window.$ = $;

const router = new VueRouter({
  routes
})

const FastClick = require('fastclick')
FastClick.attach(document.body)

for(let component of components){
  Vue.component(component.name, component.content);
}

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
