<template>
  <HeaderCpt />
  <MenuCpt />
  <ContentCpt />
  <FooterCpt />
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
  text-align: center;
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
</style>
