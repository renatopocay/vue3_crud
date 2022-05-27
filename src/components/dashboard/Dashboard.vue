<template>
  <br />
  <el-row :gutter="24">
    <el-col :span="4">
      <el-button
        id="btndash"
        type="primary"
        text
        bg
        v-on:click="$router.push({ path: '/products' })"
        >Produtos</el-button
      >
    </el-col>
    <el-col :span="4"> </el-col>
    <el-col :span="4"></el-col>
    <el-col :span="4"></el-col>
    <el-col :span="4"></el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {
  name: "DashboardCpt",
}
</script>

<style>
#btndash {
  width: 100px;
  height: 100px;
}
#divdash {
  position: center;
  cursor: pointer;
  padding: 40px;
  background: #f0f0f0;
}
</style>
