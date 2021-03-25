<template>
  <div class="container">
    <div class="con">
      <h3>欢迎登录</h3>
      <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
      <div class="btn">
        <el-button  type="primary" @click="login">登录</el-button>
      </div>

    </div>
  </div>
  <!-- role -->
</template>

<script>
import {requestLogin} from '../../utils/request'
import { successAlert, warningAlert } from '../../utils/alert'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      user:{
        username:'',
        password:'',
      }
    }
  },
  methods:{
    ...mapActions({
      "requestUser":"userActions"
    }),
    login(){
      if(this.user.username !== '' | this.user.password !==''){
         requestLogin(this.user).then(res=>{
           successAlert(res.data.msg);
           this.requestUser(res.data.list)
           this.$router.push('/')
         })
         
      }else{
        warningAlert('用户名或者密码缺失')
      }
      
    }
  }
}
</script>

<style scoped>
.container{
  width:100vw;
  height: 100vh;
  background: linear-gradient(#544666,#0b0c0c);
  position:fixed;
  top:0;
  left:0;
}
.con{
  width:350px;
  height: 300px;
  background: white;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
}
h3{
  text-align: center;
  margin: 20px;
}
.el-input,.el-button{
  width:80%;
  margin-left:30px;
  margin-top: 20px;
}
.el-button{
  color:white;
}
</style>
