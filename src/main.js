import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

// Create the app instance and use the router plugin
const app = createApp(App);
app.use(router);

// Mount the app to the '#app' element
app.mount('#app');
