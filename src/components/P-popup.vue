<template>
  <div class="p-popup">
    <!-- Modal -->
    <div
      class="modal fade"
      id="p-popup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
      

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "ProductPopup",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>


// Update the doc without using dot notation.
          // Notice the map value for favorites.
          // db.collection("users").doc("name").update({
          //     favorites: {
          //       food: "Ice Cream"
          //     }
          //   })
          //   .then(function() {
          //     console.log("Frank food updated");
          //   });