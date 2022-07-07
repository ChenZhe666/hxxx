<template>
  <div class="login-sty">
    <el-form ref="Login" :model="loginForm" :rules="loginRules">
      <h2>火星</h2>
      <el-form-item prop="userName">
        用户名:<el-input v-model="loginForm.userName" />
      </el-form-item>

      <el-form-item prop="userPwd">
        密码:<el-input type="password" v-model="loginForm.userPwd" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="add">登录</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import APIuser from '../api/user'
const loginForm = ref({
  userName: 'admin',
  userPwd: '123456'
})
const Login = ref(null)
const loginRules = ref({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  userPwd: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const add = () => {
  Login.value.validate((valid) => {
    console.log(loginForm.value)
    if (valid) {
      console.log(valid)
      APIuser.login(loginForm.value).then((res) => {
        console.log(res)
      })
    } else {
      console.log('用户名或密码错误!!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login-sty {
  width: 500px;
  padding: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: auto;
  margin-top: 200px;
  box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
}
</style>
