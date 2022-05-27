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
        >Adicionar <el-icon><Plus /></el-icon></el-button
    ></el-col>
    <el-col :span="6"
      ><!--<el-input
        v-model="searchproduct"
        class="w-50 m-2"
        placeholder="Pesquisar ..."
      >
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template> </el-input
    >--></el-col
    >
  </el-row>
  <br />
  <el-table :data="products" style="width: 100%" border v-loading="loading">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column label="SKU" width="180">
      <template #default="p">
        <el-link @click="editProduct(p.row.id)" type="primary">
          {{ p.row.sku }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column prop="descricao" label="Descrição" width="180" />
    <el-table-column
      prop="valorCusto"
      label="Valor custo"
      width="180"
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
    }
  },
  methods: {
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
