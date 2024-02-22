<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <h2>Product List</h2>
      <div class="add-new-product mb-3">
        <router-link to="/add-product-form" class="btn btn-primary">Add new product</router-link>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">1</th>
            <td>  {{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>          
              <img :src="product.image" :alt="product.name" class="product-image" />
            </td>
            <td>{{ product.quantity }}</td>
            <td>
              <router-link :to="{ name: 'EditProductForm', params: { id: product.id } }"> 
                <button  class="btn btn-info btn-sm">Edit </button>
              </router-link>
              <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Delete </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-3"></div>

  </div>

</template>
  
<script>
import { getProducts } from '../services/apiService';
import axios from 'axios';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      getProducts()
        .then((response) => {
          this.products = response.data.products;
          console.log(response.data.product.image);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    editProduct(productId) {
      this.$router.push({ name: 'EditProductForm', params: { id: productId } });
    },
    async deleteProduct(productId) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/delete-product/${productId}`);
        console.log('Product deleted:', response.data);
        this.fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
   
  },
};
</script>
  
<style scoped>
  img.product-image {
      width: 40px;
      height: 40px;
  }
  button.btn.btn-danger.btn-sm {
      margin-left: 9px;
  }
</style>