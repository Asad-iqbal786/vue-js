<template>
  <div class="body">
    <MenuPage />
    <router-view></router-view>
  </div>
     
  
</template>

<script>
import MenuPage from '@/views/MenuPage.vue';

export default {
  name: 'App',
  components: {
    MenuPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
