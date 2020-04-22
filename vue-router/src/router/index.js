import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Learn from "../components/Learn";
import Base from "../components/Base";
import Http from "../components/Http";

Vue.use(VueRouter)

//创建路由
export default new VueRouter({
  linkActiveClass:'active',
  linkExactActiveClass:"currentActive",
  routes : [
    {
      path : '/',
      //重定向
      redirect:'/hello'
    },
    {
      path:'/hello',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn,
      children : [
        {
          path: 'base',
          name:'base',
          component: Base
        },
        {
          path: 'http',
          name : 'http',
          component: Http
        }
      ]
    }
  ]
})
