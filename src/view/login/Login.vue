<template>
  <div class="box">
    <div class="main">
      <div class="main-titie">
        <div class="main-login">
          <div class="login" >扫码登录</div>
          <div :class="active=='account'?'active':'login'"  @click="switchPage('account')">账号登录</div>
          <div class="login">第三方登录</div>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        active:''
    };
  },
  methods: {
    switchPage(name) {
      this.active=name
      this.$router.push({
        name: name,
      });
    }, 
  },
};
</script>
<style scoped>
.active{ 
    border-bottom: 1px solid blue;
}
.box {
  width: 100%;
  height: 100vh;
  background-color: #bae7ff;
}
.main {
  position: absolute;
  width: 400px;
  height: 500px;
  background-color: #fff;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}
.login {
  width: 100px;
  text-align: center;
}
.main-login {
  display: flex;
  justify-content: center;
  padding: 40px;
  color: #ccc;
}
</style>