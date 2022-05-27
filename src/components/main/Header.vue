<template>
  <el-row :gutter="24">
    <el-col :span="23"
      ><img id="logo" alt="Vue logo" src="../../assets/logo.png" /> TECIDOS
      DIVERSOS LTDA</el-col
    >
    <el-col :span="1">
      <el-avatar :size="30" :src="circleUrl"
        ><el-icon><User /></el-icon
      ></el-avatar>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HeaderCpt",
}
</script>

<style scoped>
#logo {
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.el-row {
  background: #f0f0f0;
}
</style>
