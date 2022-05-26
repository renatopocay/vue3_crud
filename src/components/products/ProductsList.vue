<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  name: "ProductsListdCpt",
  data() {
    return {
      products: [],
    }
  },
  methods: {
    createProduct() {
      console.log("createProduct")
    },
  },
  mounted() {
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
}
</script>
