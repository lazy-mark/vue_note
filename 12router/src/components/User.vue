<template>
  <div>
      <h2>我是User</h2>
      <p>{{userId}}</p>
      <p>{{$route.query}}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      console.log(this.$route)
      // 处于活跃状态的路由
      return this.$route.params
    }
  }
}
</script>

<style>

</style>