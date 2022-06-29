<template>
  <div class="box">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <div class="align-center gap-20">
            <img class="header-left-img" src="../../assets/imgs/icon_class.png">
            <span class="header-left-text">后台管理系统</span>
          </div>
          <div class="align-center header-right gap-30">
            <div class="align-center header-right-name gap-10">
              <img class="header-right-name-img" src="../../assets/imgs/icon_head.png">
              <span>欢迎：磊哥</span>
            </div>
            <div class="header-right-button align-center" @click="out">
              <img class="header-right-button-img" src="../../assets/imgs/icon_switch.png" />
              退出
            </div>
          </div>
        </el-header>

        <el-container>
          <el-aside width="200px">
            <el-col :span="30">
              <el-menu active-text-color="#ffd04b" background-color="#0c1c35" class="el-menu-vertical-demo" default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon>
                      <location />
                    </el-icon>
                    <span>数据统计</span>
                  </template>
                  <el-menu-item index="1-1" @click="navigator('commodity')">好好学习</el-menu-item>
                  <el-menu-item index="1-2">天天向上</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon>
                    <Finished />
                  </el-icon>
                  <span>菜品管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon>
                    <setting />
                  </el-icon>
                  <span>用户中心</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-aside>

          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navigator(name) {
      if (this.$router.name == name) return;
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
  box-sizing: border-box;
}
.header {
  display: flex;
  color: #fff;
  justify-content: space-between;
  justify-content: space-between;
  background-color: #3a82ed;
}
.el-menu {
  height: calc(100vh - 60px);
}
.header-left-img {
  width: 30px;
}
.header-left-text {
  font-size: 21px;
}
.header-right-name-img {
  width: 30px;
}
.header-right-button-img {
  width: 30px;
}
</style>