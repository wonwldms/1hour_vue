import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home"; //생성한 Home.vue 연결
import About from "./views/About"; //생성한 About.vue 연결

Vue.use(VueRouter); //vue-router를 사용하겠다.

//// eslint-disable-line no-unused-vars
//혹시나 오류나면 위 코드 12줄 옆에 주석 붙여주기

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

export default new VueRouter({router});

/** 사용하지 않는 js파일 */
/** 오류로 인해 main.js로 해당 소스를 이동시켰습니다. */