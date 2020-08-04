import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from './api' // 导入api接口
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import * as filters from './filter'//过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false;
Vue.use(ElementUI);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");