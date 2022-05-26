<template>
  <div><input type="text" v-model="product.sku" /></div>
  <div><input type="text" v-model="product.descricao" /></div>
  <div><input type="text" v-model="product.dataReferencia" /></div>
  <div><input type="text" v-model="product.valorCusto" /></div>
  <div>
    <input
      type="button"
      value="Voltar"
      v-on:click="$router.push({ path: '/products' })"
    />
  </div>
  <div><input type="button" value="Gravar" v-on:click="saveProduct()" /></div>
</template>

<script>
export default {
  name: "ProductCpt",
  data() {
    return {
      product: {},
    }
  },
  methods: {
    saveProduct() {
      this.http
        .post(this.base_url + "/products", this.product)
        .then(() => {
          this.$router.push({ path: "/products" })
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>
