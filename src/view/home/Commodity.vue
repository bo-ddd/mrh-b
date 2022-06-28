<template>
  <div class="box">
    <div class="title">
      <span>商品名称</span>
      <el-input v-model="input" placeholder="Please input" clearable />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  height: calc(100vh - 100px);
  box-sizing: border-box;
  background-color: rgba(233, 233, 233, 0.761);
  border-radius: 5px;
  padding: 20px;
}
</style>