<template>
  <div>ID: {{ product.id }}</div>
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
      if (this.product.id) {
        // Update product
        this.http
          .put(this.base_url + "/products/" + this.product.id, this.product)
          .then(() => {
            this.$router.push({ path: "/products" })
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        // Create product
        this.http
          .post(this.base_url + "/products", this.product)
          .then(() => {
            this.$router.push({ path: "/products" })
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      let url = this.base_url + "/products/" + this.$route.params.id
      this.http
        .get(url)
        .then(response => {
          this.product = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>
