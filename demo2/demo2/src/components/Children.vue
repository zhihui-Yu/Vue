<template>
  <div>
    子组件{{ title }}--{{ age }}
    <button @click="send" type="button">传递数据</button>
    <p>{{nick}}</p>
    <p>父亲：{{ parent }}</p>
    <p>女朋友</p>
    <ul>
      <li v-for="name in girlFriends">{{ name }}</li>
    </ul>
  {{ getFoo }}
  </div>
</template>

<script>
    export default {
        name: "Children.vue",
        computed:{
          getFoo(){
              return this.$root.foo
          }
        },
        data(){
            return{

            }
        },
        props:{
            "title":String,
            "age":Number,
            /*可以设置默认值*/
            "nick":{
                type:String,
                default:"昵称"
            },
            /*设置必选项*/
            parent:{
                type:String,
                required:true
            },
            /*默认值是数组或者对象  必须返回一个function*/
            girlFriends:{
                type:Array,
                default:function(){
                    return ["g1",'g2']
                }
            }
        },
        methods:{
            send:function(){
                this.$emit("childMsg","childMsg")
            }
        }
    }
</script>

<style scoped>

</style>
