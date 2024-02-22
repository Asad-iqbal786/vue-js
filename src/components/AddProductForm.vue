
<template>
  <div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h2>Add New Product</h2>
        <form @submit.prevent="addProduct" enctype="multipart/form-data">
          <div v-if="errorMessage" class="alert alert-danger">
          <ul v-if="validationErrors">
            <li v-for="(errors, field) in validationErrors" :key="field">
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </li>
          </ul>
        </div>
          <div class="mb-3">
            <label for="productName" class="form-label">Product Name</label>
            <input type="text" class="form-control" id="productName" v-model="newProduct.name" >
          </div>
          <div class="mb-3">
            <label for="productPrice" class="form-label">Product Price</label>
            <input type="number" class="form-control" id="productPrice" v-model="newProduct.price" >
          </div>
          <div class="mb-3">
                  <label for="productQuantity" class="form-label">Product Quantity</label>
                  <input type="number" class="form-control" id="productQuantity" v-model="newProduct.quantity" >
              </div>
              <div class="mb-3">
                <label for="productDescription" class="form-label">Product Description</label>
                <input type="text" class="form-control" id="productDescription" v-model="newProduct.description" >
              </div>
          <div class="mb-3">
            <label for="productImage" class="form-label">Product Image</label>
            <input type="file" class="form-control" id="productImage" @change="handleImageUpload" >
          </div>
          <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
        
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import router from '../routes'
import { getBaseUrl } from '@/utils/apiUtils';
export default {
  setup() {

    const newProduct = ref({
      name: '',
      price: 0,
      quantity: 0,
      description: 0,
    });
    const image = ref(null);
    const errorMessage = ref('');
    const validationErrors = ref(null);

    function handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      image.value = event.target;
    }

    function addProduct() {
      if (image.value && image.value.files.length > 0) {
        const formData = new FormData();
        formData.append('image', image.value.files[0]);
        formData.append('name', newProduct.value.name);
        formData.append('price', newProduct.value.price);
        formData.append('quantity', newProduct.value.quantity);
        formData.append('description', newProduct.value.description);

        axios.post('/api/store-product', formData, {
          baseURL: getBaseUrl(), 
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          router.push({ name: 'ProductList' });
          console.log('success response' , response);
          
        }).catch((error) => {
            if (error.response && error.response.data) {
            const errorResponse = error.response.data;
            errorMessage.value = errorResponse.message;
            validationErrors.value = errorResponse.errors;
          } else {
            console.error('Error:', error);
          }
        });
      } else {
        console.error('No image selected');
      }
    }

    return {
      errorMessage,
      validationErrors,
      newProduct,
      image,
      handleImageUpload,
      addProduct
      
    };
  }
};
</script>

<style scoped>
.img-preview {
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
}
</style>
