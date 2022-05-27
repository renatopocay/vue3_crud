<template>
  <el-row>
    <el-col :span="24">
      <h4 v-if="product.id">
        <el-icon v-on:click="$router.push({ path: '/products' })"
          ><ArrowLeftBold
        /></el-icon>
        Alteração do Produto: {{ product.id }}
      </h4>
      <h4 v-if="!product.id">
        <el-icon v-on:click="$router.push({ path: '/products' })"
          ><ArrowLeftBold
        /></el-icon>
        Inclusão do Produto
      </h4>
    </el-col>
  </el-row>

  <el-form
    v-loading="loading"
    label-width="150px"
    :model="product"
    :rules="rules"
    ref="product"
    class="demo-product"
  >
    <el-form-item label="SKU" prop="sku">
      <el-input v-model="product.sku"></el-input>
    </el-form-item>

    <el-form-item label="Descriçao" prop="descricao">
      <el-input v-model="product.descricao" autocomplete="on"></el-input>
    </el-form-item>

    <el-form-item label="Data referência">
      <el-input v-model="product.dataReferencia" type="date"></el-input>
    </el-form-item>

    <el-form-item label="Valor referência" prop="valorCusto">
      <money3
        v-model.number="product.valorCusto"
        v-bind="this.currencymask"
      ></money3>
    </el-form-item>

    <el-form-item>
      <el-button type="default" v-on:click="$router.push({ path: '/products' })"
        >Voltar</el-button
      >
      <el-button type="primary" @click="submitForm('product')"
        >Salvar</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ElNotification } from "element-plus"
export default {
  name: "ProductCpt",
  inheritAttrs: false,
  data() {
    return {
      loading: false,
      update_id: false,
      product: {
        valorCusto: 0,
      },
      rules: {
        sku: [
          {
            required: true,
            message: "Informe o SKU",
            trigger: "blur",
          },
        ],
        descricao: [
          {
            required: true,
            message: "Informe a descrição",
            trigger: "blur",
          },
        ],
        valorCusto: [
          {
            required: true,
            message: "O valor não pode ser menor que 1",
            trigger: "blur",
            min: 1,
            type: "number",
          },
        ],
      },
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

    // Submit form
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.saveProduct()
        } else {
          this.message("-1", "Submit error", "error")
          return false
        }
      })
    },
    saveProduct() {
      this.loading = true
      if (this.product.id) {
        // Update product
        this.http
          .put(this.base_url + "/products/" + this.product.id, this.product)
          .then(response => {
            this.loading = true
            this.message(response.status, "Alterado com sucesso", "success")
            this.$router.push({ path: "/products" })
          })
          .catch(error => {
            this.loading = true
            this.message(error.code, error.message, "error")
          })
      } else {
        // Create product
        this.http
          .post(this.base_url + "/products", this.product)
          .then(response => {
            this.loading = true
            this.message(response.status, "Inserido com sucesso", "success")
            this.$router.push({ path: "/products" })
          })
          .catch(error => {
            this.loading = true
            this.message(error.code, error.message, "error")
          })
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      // Load product
      this.loading = true
      let url = this.base_url + "/products/" + this.$route.params.id
      this.http
        .get(url)
        .then(response => {
          this.product = response.data
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.message(error.code, error.message, "error")
        })
    }
  },
}
</script>
