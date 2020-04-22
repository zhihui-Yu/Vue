<template>

  <!--计算属性-->
  <div>
      {{ getMsg }}
    <div class="demo">
      {{getMsg}}
    </div>
    {{getMsg2()}}
    <!--active 在对象中是一个字符串 不是对象-->
    <div class="old" :class="{active:classDemo,'txt':classDemo}">
      ClassDemo  txt
    </div>

    <div :class="{'c1':c1,'c2':c2}">
      c1 c2
    </div>
    <!--三目-->
    <div :class="[isActive?c1:'',errorClass]">
      数组
    </div>

    <!--动态改变样式-->
    <!--对象中只能接收字符串  数组中就可以接收对象-->
    <div class="old" :class="[active,isActive?'active'+'1':'noActive',{'test':classDemo}]">
      Active
    </div>

    <!--CSS-->
    <div :style="{color:'red',fontSize:'20px'}"> style</div>

    <!--表单-->
    <input type="text" name="" value="" v-model="inputMsg">
    <p>{{ inputMsg }}</p>
  </div>
</template>

<script>
    export default {
        /*监听属性  一般建议用计算属性*/
        watch:{
          inputMsg(data){
              console.log(data)
          }
        },
        name: "demo2",
        data(){
            return{
              msg:"hello",
                classDemo:true,
                active:"active123",
                c1:"class1",
                c2:"class2",
                activeClass:'arrClass1',
                errorClass:'errorClass',
                isActive:true,
                inputMsg:''
            }
        },
        /*计算属性*/
        computed:{
            getMsg(){
                /*属性没被改变则不会重新计算*/
                return this.msg.split('').reverse().join('')
            }
        },
        methods:{
            //每次都会重新计算一次
            getMsg2(){
                return this.msg.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>

</style>
