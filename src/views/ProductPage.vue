<template>
  <div class="products">
    <Navbar></Navbar>

    <products-list></products-list>

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center"></div>
    </div>
    <Products />
    <login></login>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";

import Login from "@/components/Login.vue";

export default {
  name: "products",
  components: {
    Products,
    Login
  }
};
</script>
<style></style>
