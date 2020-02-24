import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) :[],
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(product => product.productId == item.productId);
      if (found) {
        found.productQuantity++;
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }
});
/*https://youtu.be/bhip_KrH3_o?list=PLB4AdipoHpxYPjGo0n2m6tmCLud_iSEbv&t=3 */