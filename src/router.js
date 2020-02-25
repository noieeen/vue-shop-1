import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Products from "./views/Products.vue";
import Orders from "./views/Orders.vue";
import Profile from "./views/Profile.vue";
import Contactus from "./views/ContactUs.vue";
//import Checkout from "./views/Checkout.vue";
import {fb} from "./firebase";
require('firebase/auth')

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "products",
          name: "products",
          component: Products
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        }
      ]
    }, 
    {
      path: "/checkout",
      name: "checkout",
      component: () =>
        import(/* webpackChunkName:"checkout" */ "./views/Checkout.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName:"about" */ "./views/About.vue")
    },
    {
      path: "/contactus",
      name: "contactus",
      component: () =>
        import(/* webpackChunkName:"about" */ "./views/ContactUs.vue")
    },
    {
      path: "/products",
      name: "productspage",
      component: () =>
        import(/* webpackChunkName:"about" */ "./views/ProductPage.vue")
    },
   
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;