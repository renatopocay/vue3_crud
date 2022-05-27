<template>
  <div>
    <input type="button" value="Adicionar" v-on:click="createProduct()" /><br />
    <table>
      <tr>
        <th>ID</th>
        <th>SKU</th>
        <th>Descrição</th>
        <th>Valor custo</th>
        <th></th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td v-on:click="editProduct(product.id)">
          {{ product.sku }}
        </td>
        <td>{{ product.descricao }}</td>
        <td>{{ product.valorCusto }}</td>
        <input
          type="button"
          value="Excluir"
          v-on:click="deleteProduct(product.id)"
        />
      </tr>
    </table>
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
    // Create Product
    createProduct() {
      this.$router.push({ path: "/product/" })
    },

    // Delete Product
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

    // Edit Product
    editProduct(id) {
      this.$router.push({ path: "/product/" + id })
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
