import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {  //存放状态
    name: 'helloVuex'
  },
  mutations: {
    
  },//state成员操作
  actions: {
    
  },//异步操作
  modules: {

  }// 模块化状态管理
})

export default store;
