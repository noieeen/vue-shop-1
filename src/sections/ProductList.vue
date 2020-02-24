<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products List (Slide)</h1>
      <div class="row">
        <div class="col-md-4" v-for="product in products">
          <div class="card product-item">
            <carousel :perPage="1">
              <!--slide-->
              <slide v-for="(image, index) in product.images">
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  width="250px"
                />
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>                
                <h5 class="card-price">
                  {{
                    product.price
                      | currency("THB", 2, {
                        symbolOnLeft: false,
                        spaceBetweenAmountAndSymbol: true
                      })
                  }}
                </h5>
              </div>
              <h5 class="card-title">DETAILS</h5>
              <p class="card-text" v-html="product.description"></p>

              <add-to-cart
                :image="getImage(product.images)"
                :p-id="product['.key']"
                :price="product.price"
                :name="product.name"
              ></add-to-cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Productslist",
  props: {
    msg: String
  },

  data() {
    return {
      products: []
    };
  },

  methods: {
    getImage(images) {
      return images[0];
      
    }
    
  },

  firestore() {
    return {
      products: db.collection("products")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>
