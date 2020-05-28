<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'hello vue-cli'
      }
    }
  }
</script>
<!-- 添加“scoped”属性以将CSS限制到此组件 -->
<style scoped>
  .msg {
    color: red;
    font-size: 50px;
  }
</style>
