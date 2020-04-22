<template>
    <div>
        <slot name="v1"></slot>
      <!--传递则显示  不传递则显示默认信息-->
        <slot name="v2">
          v2 slot
        </slot>
        <slot msg="ChildMsg">v3 slot</slot>
    </div>
</template>
<!--插槽效果，内容由父组件传递给子组件-->
<script>
    export default {
        name: "SoltDemo"
    }
</script>

<style scoped>

</style>
