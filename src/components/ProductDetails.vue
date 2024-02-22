<template>
    <div>
      <h1>Product Details</h1>
      <div v-if="product">
        <img :src="image_url" :alt="product.name" class="product-image" />
        <p><strong>Name:</strong> {{ product.name }}</p>
        <p><strong>Price:</strong> {{ product.price }}</p>
        <p><strong>Quantity:</strong> {{ product.quantity }}</p>
      </div>
    </div>
    <router-link to="/product-list">
        <button  class="btn btn-info btn-sm"> Back to Product List </button>
    </router-link>

  </template>
  
  <script>
  import { productDetail } from '../services/apiService';

  export default {
    name: 'ProductDetails',
    data() {
      return {
        product: null,
      };
    },
    mounted() {
      const productId = this.$route.params.id;
      this.fetchProductDetails(productId);
    },
    methods: {
        fetchProductDetails(productId) {
            productDetail(productId)
            .then((response) => {
                console.log(response);  // Log the entire response
                this.product = response.data.product;
                this.image_url = response.data.image_url;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        },
    },


  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  </style>
  