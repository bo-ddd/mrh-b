<template>
  <div class="box">
    <div class="main">
      <div class="main-titie">
        <div class="main-login">
          <div
            class="login"
            :class="{active:active == item.name}"
            v-for="item in data"
            :key="item.id" 
            @click="switchPage(item.name)"
          >
           <div>{{ item.label }}</div> 
            <div class="line"></div> 
          </div>
        </div>
      </div>
      <div>
       <component :is="active"></component>
      </div>
    </div>
  </div>
</template>
<script>
import Account from './components/Account.vue'
import Scanning from './components/Scanning.vue'
export default {
  components:{
    Account,
    Scanning
  },
  data() {
    return {
      active: "Account",
      data: [
        {
          id: 1,
          label: "扫码登录",
          name: "Scanning",
        },
        {
          id: 2,
          label: "账号登录",
          name: "Account",
        }, 
      ], 
    };
  },  
  methods: {
    switchPage(name) { 
      this.active = name;
    },
  },
};
</script>
<style scoped> 
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
  display: flex;
  text-align: center;
  align-items: center;
    flex-direction: column;
}
.main-login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #ccc;
}
.line {
  width: 20px;
  height: 5px;
  border-bottom: 1px solid #fff;
  float: left;
}

.active {
  color:#000;
}

.active .line{
  display: block;
  border-bottom: 1px solid blue;
}
</style>