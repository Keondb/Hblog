import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const actions = {}

//state成员操作
const mutations = {
    handleUserName: (state, user_name) => {
        state.user_name = user_name
            // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
        localStorage.setItem('user_name', user_name)
    }
}

//存放状态
const state = {
        name: 'helloVuex',
        token: '',
        user_name: '' || localStorage.getItem('user_name')
    }
    // getters 只会依赖 state 中的成员去更新
const getters = {
    userName: (state) => state.user_name
}



const store = new Vuex.Store({
    state,
    mutations,
    actions, //异步操作
    modules: {}, // 模块化状态管理
    getters
})

export default store;