import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import request from './request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// axios({
//   url: 'http://localhost:8080/static/user.json',
//   method: 'GET'
// }).then(resp => { // 返回一个promise
//   console.log(resp)
// })

// axios.get('http://localhost:8080/static/user.json', {

// }).then(resp => {
//   console.log(resp)
// })

// axios.get('http://localhost:8080/static/user.json', {
//   params: {
//     id: '1',
//     age: 10
//   }
// }).then(resp => {
//   console.log(resp)
// })

// axios.all([axios({
//   url: 'http://localhost:8080/static/user.json',
// }),
// axios({
//   url: 'http://localhost:8080/static/permit.json'
// })]).then(resps => {
//   console.log(resps)
// })


// 回调
request({
  url: '/static/user.json'
}, resp => {
  console.log(resp)
}, err => [
  console.log(err)
])

// promise
request({
  url: '/static/user.json'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})



