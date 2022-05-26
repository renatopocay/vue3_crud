<template>
  <div>
    <input
      type="button"
      value="Produto"
      v-on:click="$router.push({ path: '/products' })"
    />
  </div>
</template>

<script>
export default {
  name: "DashboardCpt",
}
</script>
