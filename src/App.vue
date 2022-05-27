<template>
  <div class="common-layout">
    <el-container>
      <el-header><HeaderCpt /></el-header>
      <el-container>
        <el-aside id="sidemenu"><MenuCpt /></el-aside>
        <el-container>
          <el-main><ContentCpt /></el-main>
        </el-container>
      </el-container>
    </el-container>
    <el-footer><FooterCpt /></el-footer>
  </div>
</template>

<script>
import HeaderCpt from "@/components/main/Header.vue"
import MenuCpt from "@/components/main/Menu.vue"
import ContentCpt from "@/components/main/Content.vue"
import FooterCpt from "@/components/main/Footer.vue"

export default {
  name: "App",
  components: {
    HeaderCpt,
    MenuCpt,
    ContentCpt,
    FooterCpt,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.el-icon {
  cursor: pointer;
}

.el-menu-item.is-active {
  background: #f0f0f0 !important;
}

.el-menu-item {
  position: center;
  text-align: center !important;
}
</style>
