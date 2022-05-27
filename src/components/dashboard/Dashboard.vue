<template>
  <div class="flex justify-between items-center flex-wrap">
    <el-row>
      <el-col :span="24">
        <el-button
          type="primary"
          round
          v-on:click="$router.push({ path: '/products' })"
          >Produtos</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DashboardCpt",
}
</script>
