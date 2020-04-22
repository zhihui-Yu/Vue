// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from "axios";
import qs from "qs";

Vue.prototype.$axios = Axios
Vue.prototype.HOST = "/douban_api"
Vue.config.productionTip = false


// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.method === "post"){
    config.data = qs.stringify(config.data)
  }
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(!response.data){
    return {
      msg :"无数据"
    }
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
/*input 自动聚焦*/
/*Vue.directive("focus",{
  bind : function(){
    console.log("bind")
  },
  //当前指令的生命周期
  inserted : function (el) {
    el.focus();
  },
  update : function () {
    console.log("update")
  }
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{foo:"helloFoo"},
  components: { App },
  template: '<App/>'
})
