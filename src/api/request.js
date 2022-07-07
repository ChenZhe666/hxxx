import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  // timeout: 5000
})

service.interceptors.request.use(
  function (config) {
    console.log(config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    console.log(response)
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default service
