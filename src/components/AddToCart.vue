<template>
  <div class="add-to-cart">
   
        <button class="btn btn-primary mr-1" @click="addToCart">Add to Cart</button>
        <button class="btn btn-primary mr-1" @click="popup">More Details</button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },

  data(){
      return {
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }

      }
  },
  methods:{
    addToCart(){
      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item)
      console.log('pId',this.item);
    },
      popup(){
      $('#ProductPopup').modal('show');
      // this.$store.commit('addToCart', this.item)
      // console.log('pId',this.item);
    }

  }

};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
