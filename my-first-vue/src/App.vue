<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!-- <demo2/>
    {{ demo }}
    <learn @getMsg="getSonMsg" :title="title"/>
 -->
    <!--keep-alive 保持原来组件的状态 避免重复渲染-->
    <keep-alive>
        <component v-bind:is="currentComponent"></component>
    </keep-alive>
    <button type="button" @click="change">切换组件</button>
    <a :[attr]="url">
      attr
    </a>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld';
import VueDemo    from './components/VueDemo';
import demo2 from "./components/demo2";
import Learn from "./components/Learn";
import A from "./components/A";
import B from "./components/B";

export default {
    name : 'App',
    methods:{
        getSonMsg(data){
            this.demo = data
        },
        change(){
          if(this.flag){
              this.flag = false;
              this.currentComponent = A
          } else{
              this.flag = true
              this.currentComponent = B
          }
        }
    },
    data(){
      return{
          title:{'name':'iwen'},
          demo:'',
          currentComponent:B,
          flag:true,
          attr:"class",
          url:"www.baidu.com"
      }
    },
    components : {
        HelloWorld,
        VueDemo,
        demo2,
        Learn,
        A,
        B
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
