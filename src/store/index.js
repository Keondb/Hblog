import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {  //存放状态
    name: 'helloVuex'
  },
  mutations: {
    edit(state) {
      state.name = 'jack'
    }
  },//state成员操作
  actions: {
    aEdit(context,payload){
      setTimeout(()=>{
          context.commit('edit',payload)
      },2000)
  }
  },//异步操作
  modules: {

  }// 模块化状态管理
})

export default store;
