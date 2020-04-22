<template lang="html">
  <div>
    <p> VueDemo </p>
    <span>{{msg}}</span>
    <br/>
    <span v-once>{{ msg }}</span>

    {{"hh"}}
   <!-- {{20-1}}-->
    {{"ok"?'YES':'NO'}}
    {{"hello".split("").reverse().join('')}}

    <span>{{hello}}</span>

    <div v-html="hello"></div>

    <a v-bind:href="url" >{{url_name}}</a>

    <div :class="divClass">容器</div>

    <div :class="divClass2+'-1'">容器2</div>

    <div v-if="flag"> YES</div>
    <div v-else> NO</div>

    <!--v-show 页面会加载该元素 开销低-->
    <div v-show="flag"> flag == true</div>

    <!-- 列表渲染  默认数组没有key 但是最好添加-->
    <ul>
      <!--数组-->
      <li v-for="(people,index) in names" :key="index">
        {{index}}:{{people.name}}--{{people.age}}
      </li>
      <!--对象-->
      <li v-for="(value,key,index) in obj" :key="index">
        {{index}} -- {{key}} --{{value}}
      </li>
    </ul>

    <!--时间监听  v-on == @-->
    <button v-on:click="clickHandler('haha',$event)" type="button" name="button">按钮</button>

    <!--
      有些方法可以显示数组，有些不行
      改变原数组会显示
      不改变原数组，创建新数组，则不引起视图变化
    -->
    <ul>
      <li v-for="item in helloArr">{{item}}</li>
    </ul>
    <button v-on:click="addHanler" type="button" name="button">添加</button>

  </div>
</template>

<script>
    export default {
        name: 'VueDemo',
        data () {
            return {
                msg: 'msg',
                hello:'<h3>hello</h3>',
                url_name:"淘宝",
                url : "www.taobao.com",
                divClass:"isActive",
                divClass2:"list",
                flag : true,
                names:[
                    {
                       name : "iwen",
                        age : 20
                    },
                  {
                      name:"john",
                      age:18
                  },
                  {
                      name :    "tom",
                      age:18
                  }],
                obj:{
                    name:"iwen",
                    age:20
                },
                helloArr:["hello1","hello2","hello3"]
            }
        },
        methods:{
          clickHandler(data,event) {
              console.log(event)
              console.log(data)
              this.flag = !this.flag;
          },
            addHanler(){
              /*push  加后面*/
              /*加前面*/
              this.helloArr.unshift("hello4")
            }
        }
    }
</script>

