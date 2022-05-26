<template>
  <div>
    <input type="button" value="Adicionar" v-on:click="createProduct()" /><br />
    <li v-for="product in products" :key="product.id">
      {{ product.id }}
      {{ product.sky }}
      {{ product.descricao }}
      {{ product.valorCusto }}

      <div>
        <input
          type="button"
          value="Excluir"
          v-on:click="deleteProduct(product.id)"
        />
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "ProductListCpt",
  data() {
    return {
      products: [],
    }
  },
  methods: {
    // Create Products
    createProduct() {
      this.$router.push({ path: "/product/" })
    },

    // Delete Products
    deleteProduct(id) {
      this.http
        .delete(this.base_url + "/products/" + id)
        .then(() => {
          this.products = this.products.filter(p => p.id !== id)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // Show Products
    getProducts() {
      let url = this.base_url + "/products"
      console.log(url)
      this.http
        .get(url)
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.getProducts()
  },
}
</script>
