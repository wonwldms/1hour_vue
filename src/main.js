import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false


/** 부트스트랩 import */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


/** page import */
import Home from "./views/Home"; //생성한 Home.vue 연결
import About from "./views/About"; //생성한 About.vue 연결


/** router import */
import VueRouter from "vue-router";
Vue.use(VueRouter); //vue-router를 사용하겠다.

const router = new VueRouter({ 
  mode : "history",
  routes : [
      { 
          path : "/", 
          component : Home 
      },
      { 
          path : "/about", 
          component : About 
      }
  ]
});


/** default */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
