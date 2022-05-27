<template>
  <!--Menu Opções
  <nav><router-link to="/">Produto</router-link></nav>-->

  <el-row class="tac">
    <el-col :span="12">
      <h5 id="menutitle" class="mb-2">Menu Opções</h5>
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <el-link type="primary" v-on:click="this.$router.push({ path: '/' })"
            >Produtos</el-link
          >
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "MenuCpt",
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  padding-left: 10px;
}

#menutitle {
  text-align: right;
}
</style>
