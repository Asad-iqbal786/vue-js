import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import HomeComponent from './components/HomeComponent.vue';
import ProductList from './components/ProductList.vue';
import AddProductForm from './components/AddProductForm.vue'; 
import EditProductForm from './components/EditProductForm.vue'; 
import ProductDetails from './components/ProductDetails.vue'; 
const routes = [
  { path: '/home-page',name: 'HomePage', component: HomePage,},
  { path: '/',name: 'HomeComponent', component: HomeComponent,},
  { path: '/product-list',name: 'ProductList', component: ProductList,},
  { path: '/product-list',name: 'ProductList', component: ProductList,},
  { path: '/add-product-form',name: 'AddProductForm', component: AddProductForm,},
  { path: '/produc-details/:id',name: 'ProductDetails', component: ProductDetails,},
  { path: '/edit-product/:id', name: 'EditProductForm', component: EditProductForm, },

];



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
