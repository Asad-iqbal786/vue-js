<template>
    <div>
      <h1>Welcome to My Home Page</h1>
      <p>This is a simple home page component in Vue.js 3.</p>
      <div class="row">
        <div class="col-md-4 product-detail"  v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">

          <img :src="product.image" :alt="product.name" class="product-image" />
          <p><strong>Name:</strong> {{ product.name }}</p>
          <p><strong>Price:</strong> {{ product.price }}</p>
          <p><strong>Quantity:</strong> {{ product.quantity }}</p>
            <a  class="btn btn-info btn-sm"> Product details </a>
          </router-link>
        </div>
      </div>
      
    </div>
</template>
  
<script>
import { getProducts } from '../services/apiService';

export default {
  name: 'HomeComponent',
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
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    editProduct(productId) {
      // Use Vue Router to navigate to the edit page
      this.$router.push({ name: 'EditProductForm', params: { id: productId } });
    },

   
  },
};
</script>
<style scoped>

img.product-image {
  width: 260px;
  height: 300px;
}
.row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.product-detail {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 250px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Add additional styling as needed */
</style>
