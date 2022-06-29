<template>
  <div>
    <div class="box">
      <el-input class="inp" v-model="phone" placeholder="请输入手机号">
        <template #prepend>
          <el-select
            v-model="select"
            size="large"
            class="sel"
            placeholder="+86"
            style="width: 80px"
          >
            <el-option label="+86" value="1" />
            <el-option label="+100" value="2" />
            <el-option label="+45" value="3" />
          </el-select>
        </template>
      </el-input>
      <el-input class="boxs" v-model="password" placeholder="请输入密码" />
      <div class="verification">
        <el-input
          class="captchaSrc"
          v-model="captcha"
          placeholder="请输入验证码"
        />
        <img
          :src="captchaSrc"
          @click="getcaptcha"
          alt=""
          class="icon-captcha"
        />
      </div>
      <div class="main">
        <div class="check">
          <el-checkbox v-model="checked1" label="自动登录" size="large" />
        </div>
        <div>
          <el-link type="info">忘记密码？</el-link>
        </div>
      </div>
      <div class="btna">
        <el-button type="primary" class="btn" plain @click="sumite"
          >登 录</el-button
        >
      </div>
      <div class="agree">
        <p class="fs-20">登录即同意</p>
        <p><el-link type="primary">《探迹用户协议》</el-link></p>
      </div>
      <div class="foot">
        <div>
          <el-link href="https://element.eleme.io" target="_blank"
            >登录洞客</el-link
          >
        </div>
        <div class="shu"></div>
        <div>
          <el-link href="https://element.eleme.io" target="_blank"
            >注册账号</el-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginApi, getCaptchaApi } from "../../../api/api";
export default {
  data() {
    return {
      phone: "",
      password: "",
      checked1: "",
      captcha:'',
      select:'',
      captchaSrc: "/api/captcha",
    };
  },
  methods: {
    getcaptcha() {
      this.captchaSrc = getCaptchaApi();
    },
    async sumite() {
      let res=loginApi({username:this.phone,password:this.password,captcha:this.captcha});
      console.log(res);
    },
  },
};
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inp {
  width: 250px;
  background-color: #f2f4f9;
  height: 40px;
}

.boxs {
  width: 250px;
  background-color: #f2f4f9;
  margin-top: 20px;
  height: 40px;
}
.icon-captcha {
  width: 100px;
}
.main {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
}
.btn {
  width: 250px;
  height: 40px;
}
.btna {
  margin-top: 20px;
}
.verification {
  display: flex;
  margin-top: 20px;
}
.agree {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.captchaSrc {
  width: 150px;
  height: 40px;
}
.foot {
  width: 40%;
  display: flex;
  align-content: center;
  justify-content: space-around;
  margin-top: 20px;
}
.fs-20 {
  font-size: 14px;
  height: 5px;
  line-height: 10px;
}
.shu {
  width: 3px;
  height: 25px;
  background-color: #eef0f0;
  line-height: 50px;
}
.check {
  height: 35px;
}
</style>