<template>
    <div>
        <button v-on:click="show = !show">Toggle</button>
        <transition name="fade">
          <p class="box" v-if="show">hello</p>
        </transition>

      <!--在main.js中声明后自动聚焦  全局指令/局部指令 局部则在当前文件声明-->
      <input v-focus/>
      <p v-myStyle></p>
    </div>
</template>

<script>
    export default {
        name: "anim",
        directives : {
            focus: {
                inserted:function (el) {
                   el.focus();
                }
            },
            myStyle : {
                inserted : function (el) {
                    el.style.fontSize = "40px";
                    el.innerText = "haha";
                }
            }
        },
        data(){
            return {
              show : true
            }
        }
    }
</script>

<style scoped>
  .box {
    width: 100px;
    height: 100px;
    background: red;
  }
 /* !* 0 过渡*!
  .fade-enter, .fade-leave-to{
     opacity: 0;
    width: 0;
   }
  !*1*!
  .fade-enter-to, .fade-leave{
    opacity: 1;
    width: 100px;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all 1s;
  }*/
  /*动画*/
  .fade-enter, .fade-leave-to{
  }
   .fade-enter-to, .fade-leave{
   }
  .fade-enter-active{
      animation: bounce-in .5s;
  }
  .fade-leave-active{
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
