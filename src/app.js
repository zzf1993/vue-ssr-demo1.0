// app.js
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './route/index'
import { createStore } from './store/index'
import {sync} from 'vuex-router-sync' // 把当VueRouter状态同步到Vuex中
import axios from 'axios'
import Qs from 'qs'

// 创建 router 实例
const router = createRouter()
// 创建 store 实例
const store = createStore()

// 将路由状态添加到vuex中
sync(store, router)

//将axios写入vue的原型
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

const app = new Vue({
	// 注入 router store 到根 Vue 实例
	router,
	store,
	render: h => h(App)
}) // .$mount('#app')

/**
 * 导出 router and store.
 */
export { app, router, store }
