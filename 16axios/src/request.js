import axios from 'axios'

// 通过回调函数
// export function request(config, success, failure) {
//     const inst = axios.create({
//         baseURL: 'http://localhost:8080/',
//         timeout: 5000
//     })

//     inst(config)
//     .then(resp => {
//         success(resp)
//     })
//     .catch(err => [
//         failure(err)
//     ])
// }


// 通过 Promise 函数
// export default function request(config) {
//     return new Promise((reslove, reject) => {
//         const inst = axios.create({
//             baseURL: 'http://localhost:8080',
//             timeout: 5000,
//         })
//         inst(config)
//         .then(resp => {
//             reslove(resp)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }

// 简写Promise
export default function request(config) {
    const inst = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000,
    })

    // 添加拦截器
    inst.interceptors.request.use((config) => {
        // 1.config中的一些信息不符合服务器的要求
        // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标
        // 3.某些网络请求(登录),必须携带一些特殊的信息(token)
        console.log(config)
        // 必须返回,否则其它请求拿不到config
        return config
    }, (err) => {
        console.log(err)
    })
    inst.interceptors.response.use(resp => {
        return resp.data
    }, err => {
        console.log(err)
    })

    return inst(config)
}