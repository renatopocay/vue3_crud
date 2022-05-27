<template>
  <el-row>
    <el-col :span="24"
      ><h4>
        <el-icon v-on:click="$router.push({ path: '/' })"
          ><ArrowLeftBold
        /></el-icon>
        Manutenção de Produtos
        <el-badge
          :value="products.length"
          class="item"
          type="primary"
        ></el-badge>
      </h4>
    </el-col>
    <el-col :span="18"
      ><el-button type="success" v-on:click="createProduct()"
        >Adicionar &nbsp;<el-icon><Plus /></el-icon></el-button
    ></el-col>
    <el-col :span="6"
      ><el-input
        v-model="search"
        class="w-50 m-2"
        placeholder="Pesquisar ..."
        @keyup="searchproduct"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template> </el-input
    ></el-col>
  </el-row>
  <br />
  <el-table
    :data="productsFilter"
    :table-layout="auto"
    border
    v-loading="loading"
  >
    <el-table-column prop="id" label="ID" />
    <el-table-column label="SKU">
      <template #default="p">
        <el-link @click="editProduct(p.row.id)" type="primary">
          {{ p.row.sku }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="descricao" label="Descrição" />
    <el-table-column
      prop="valorCusto"
      label="Valor custo"
      :formatter="formatter"
    />
    <el-table-column>
      <template #default="p">
        <el-popconfirm
          confirm-button-text="Sim"
          cancel-button-text="Não"
          icon-color="#626AEF"
          title="Deseja excluir este produto ?"
          @confirm="deleteProduct(p.row.id)"
          ><template #reference>
            <el-icon><Delete /></el-icon>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ElNotification } from "element-plus"
const currencyformatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
})

export default {
  name: "ProductListCpt",
  data() {
    return {
      loading: true,
      products: [],
      productsFilter: [],
      search: "",
    }
  },
  methods: {
    // Convert Object to String to search
    objectToString(object) {
      return JSON.stringify(Object.values(object)).toLowerCase()
    },

    // Search product
    searchproduct(e) {
      if (e.key === "Escape") {
        this.search = ""
      }
      if (this.search) {
        this.productsFilter = this.products.filter(p => {
          return (
            this.objectToString(p).indexOf(e.target.value.toLowerCase()) > 0
          )
        })
      } else {
        this.productsFilter = this.products
      }
    },
    // Message
    message(code, message, type) {
      ElNotification({
        title: "Code: " + code,
        message: "Message: " + message,
        type: type,
      })
    },

    formatter(row, column, cellValue) {
      return currencyformatter.format(cellValue)
    },

    // Create Product
    createProduct() {
      this.$router.push({ path: "/product/" })
    },

    // Delete Product
    deleteProduct(id) {
      this.loading = true
      this.http
        .delete(this.base_url + "/products/" + id)
        .then(response => {
          this.message(response.status, "Deletado com sucesso", "success")
          this.products = this.products.filter(p => p.id !== id)
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.message(error.code, error.message, "error")
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
          this.productsFilter = response.data
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.message(error.code, error.message, "error")
        })
    },
  },
  mounted() {
    this.getProducts()
  },
}
</script>
