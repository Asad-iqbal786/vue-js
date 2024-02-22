<template>
    <div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h2>Edit Product</h2>
          <form @submit.prevent="updateProduct" enctype="multipart/form-data">
            <div class="mb-3">
              <label for="productName" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="productName" v-model="product.name">
            </div>
            <div class="mb-3">
              <label for="productPrice" class="form-label">Product Price</label>
              <input type="number" class="form-control" id="productPrice" v-model="product.price" required>
            </div>
            <div class="mb-3">
              <label for="productQuantity" class="form-label">Product Quantity</label>
              <input type="number" class="form-control" id="productQuantity" v-model="product.quantity" required>
            </div>
            <div class="mb-3">
              <label for="productDescription" class="form-label">Product Description</label>
              <input type="text" class="form-control" id="productDescription" v-model="product.description" required>
            </div>
  
            <!-- Add file input for updating the image if needed -->
            <div class="mb-3">
              <label for="productImage" class="form-label">Product Image</label>
              <input type="file" class="form-control" id="productImage" @change="handleImageUpload" required>
            </div>
  
            <button type="submit" class="btn btn-primary">Update Product</button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import router from '../routes'
  import { getBaseUrl } from '@/utils/apiUtils';

  export default {
    name: 'EditProductForm',
    data() {
      return {
        product: {
          price: 0,
          image: null, // Add an image property
        },
      };
    },
    mounted() {
      const productId = this.$route.params.id;
      this.fetchProductDetails(productId);
    },

    methods: {
      async fetchProductDetails(productId) {
        try {

          const response = await axios.get(`${getBaseUrl()}/api/edit-product/${productId}`);
          const productData = response.data.product;
          this.product.price = productData.price;
          this.product.name = productData.name;
          this.product.quantity = productData.quantity;
          this.product.description = productData.description;
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      },
  
      handleImageUpload(event) {
        const file = event.target.files[0];
        this.product.image = file;
      },
  
      async updateProduct() {
        const productId = this.$route.params.id;
        try {
          const formData = new FormData();
          formData.append('name', this.product.name);
          formData.append('price', this.product.price);
          formData.append('quantity', this.product.quantity);
          formData.append('description', this.product.description);
          formData.append('image', this.product.image);
  
          const response = await axios.post(`${getBaseUrl()}/api/edit-store-product/${productId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Product updated:', response.data);
          router.push({ name: 'ProductList' });

        } catch (error) {
          console.error('Error updating product:', error);
          
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>