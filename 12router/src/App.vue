<template>
  <div id="app">
    <!-- 占位,组件渲染的位置 -->
    <!-- <router-view/> -->
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- router-link是vue-router注册的组件 -->
    <router-link to="/index" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/login" tag="button" replace>登录</router-link>
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <!-- $route.query可获取路径中的query参数 -->
    <router-link :to="{path: '/user', query: {age: 18}}" tag="button">user</router-link>

    <!-- <button @click="btnIndex">首页code</button> -->
    <!-- <button @click="btnLogin">登录code</button> -->
    <button @click="btnUser">user1</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: '1'
    }
  },
  methods: {
    btnIndex() {
      // router表示所有的路由对象
      // this.$router.push('/index')
      this.$router.replace('/index')
      console.log(this.$router)
    },
    btnLogin() {
      // this.$router.push('/login')
      this.$router.replace('/login')

    },
    btnUser() {
      this.$router.replace({
        path: '/user',
        query: {
          age: 18
        }
      })
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
