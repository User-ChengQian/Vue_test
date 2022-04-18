import Vue from 'vue'
import App from './App.vue'
//导入全局组件
import count from "@/components/mycount.vue"
//定义全局组件
Vue.component('mycount', count)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')