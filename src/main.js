import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";

//import stripe from 'stripe';
const stripe = require('stripe')('sk_test_8amaJfyLyRDDyyWfsAxqy2DK00aEdVg4L8');


// import Vuex from 'vuex';
// Vue.use(Vuex);
import store from './store'

import VueCarousel from 'vue-carousel';  /* slide */
Vue.use(VueCarousel);

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters);


Vue.use(VueFirestore);

require('firebase/firestore')

Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
})

import Swal from "sweetalert2"; //alert
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
}); 
window.Toast = Toast;



window.$ = window.jQuery = jQuery;

import "bootstrap";
import "popper.js";
import "./assets/app.scss";

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
//Vue.component("Hero", require("./components/Hero.vue").default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);


Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
