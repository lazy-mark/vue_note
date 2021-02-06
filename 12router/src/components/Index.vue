<template>
  <div>
    <h2>我是首页</h2>
    <p>ppppp</p>

    <router-view></router-view>

    <router-link to="/index/news">新闻</router-link>
    <!-- <router-link to="/index/message">消息</router-link> -->
    <router-link to="/index/message">消息</router-link>
  </div>
</template>

<script>
export default {
  name: "Index",
  created() {
    console.log("index create");
  },
  destroyed() {
    console.log("index destroyed");
  },
};
</script>

<style>
</style>