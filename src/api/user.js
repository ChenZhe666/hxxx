import request from './request'

// const Login = (data) => {
//   return request({ url: '/users/login', method: 'POST', data })
// }
export default {
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params
    })
  }
}

// const getcaptcha = () => {
//   return request({ url: '/users/list', method: 'GET' })
// }
// const getUserInfo = () => {
//   return request({ url: '/users/list', method: 'GET' })
// }

// export default {
//   Login,
//   getcaptcha,
//   getUserInfo
// }
