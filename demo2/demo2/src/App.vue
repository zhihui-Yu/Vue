<template>
    <div id="app">
      <img src="./assets/logo.png">
     <!-- <solt-demo>
        <template slot="v1">
          <div class="v1">
            &lt;!&ndash;在哪里定义 就在哪里赋值&ndash;&gt;
            {{ msg }}
            slot demo 1
          </div>
        </template>
        <template slot="v2">
          <div class="v2">
            slot demo 2
          </div>
        </template>
        &lt;!&ndash;slot-scope不能和name一起用&ndash;&gt;
        <template slot-scope="slot_data">
          <div>
            ddddd
          {{slot_data.msg }}
          </div>
        </template>
      </solt-demo>-->
      <AxiosDemo />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Parent from "./components/Parent";
import Mounted from "./components/Mounted";
import SoltDemo from "./components/SoltDemo";
import Anim from "./components/Anim";
import FilterDemo from "./components/FilterDemo";
import AxiosDemo from "./components/AxiosDemo";

export default {
  name: 'App',
    data(){
      return {
          msg:"App 插槽数据"
      }
    },
  components: {
      HelloWorld,
      Parent,
      Mounted,
      SoltDemo,
      Anim,
      FilterDemo,
      AxiosDemo
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
