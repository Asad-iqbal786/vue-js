import axios from 'axios';
import { getBaseUrl } from '@/utils/apiUtils';
const BASE_URL = getBaseUrl();

const apiService = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});


  
  export const getProducts = () => {
      return apiService.get('/all-products');
  };


  export const storeProduct = (productData) => {
    return apiService.post('/store-product', productData);
  };

  export const fetchProduct = (id) => {
    return apiService.get(`/edit-product/${id}`);
  };
  
  export const fetchProductSave = (id) => {
    return apiService.get(`/update-product/${id}`);
  };
  
  export const productDetail = (productId) => {
    return apiService.get(`/product-detail/${productId}`);
  };

  


export default apiService;
