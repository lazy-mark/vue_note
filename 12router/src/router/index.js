import Vue from 'vue'
// 1. 导入路由对象
import Router from 'vue-router'
// import Index from './../components/Index'
// import Login from './../components/Login'
// import User from './../components/User'

// 2. 引用路由对象
Vue.use(Router)

// 4. 配置路由映射关系
const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    // component: Login
    component: () => import('./../components/Login')
  },
  {
    path: '/index',
    name: 'Index',
    // 全局导航守卫,点击导航时,切换浏览器中的title
    meta: {
      title: '首页'
    },
    // component: Index,
    component: () => import('../components/Index'),
    children: [
      {
        path: 'news',
        name: 'News',
        meta: {
          title: '新闻'
        },
        component: () => import('./../components/News'),
      },
      {
        path: 'message',
        name: 'Message',
        meta: {
          title: '消息'
        },
        component: () => import('./../components/Message'),
      },
      {
        path: '',
        redirect: '/index/news'
      }
    ]
  },
  {
    // :id动态路由参数
    path: '/user/:id',
    name: 'User',
    meta: {
      title: '用户'
    },
    // component: User
    component: () => import('./../components/User')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('./../components/User')
  },
  {
    // /路径重定向到/home路径
    path: '/',
    redirect: '/index'
  }
]

// 3. 创建路由实例
const router = new Router({
  mode: 'history',
  routes,
})

// 前置钩子
// router.beforeEach((to, from, next) => {
//   // 全局导航守卫,点击导航时,切换浏览器中的title
//   // document.title = to.meta.title
//   // 从 from 到 to
//   document.title = to.matched[0].meta.title
//   console.log(to)
//   next()
// })

// 后置钩子
router.afterEach((to,from) => {
  document.title = to.matched[0].meta.title
})

export default router