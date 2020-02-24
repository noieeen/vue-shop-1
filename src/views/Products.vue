<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 jusify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Product Page</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/productsPage.png" alt class="img-fluid" />
          </div>

          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <hr />

      <div class="product-test">
        <h3 class="d-inline-block">Product list</h3>
        <button class="btn btn-primary float-right" @click="addNew()">Add Products</button>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products">
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>
                  <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                  <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description" />
                  <!-- <textarea type="text" placeholder="Product Description" v-model="product.description" class="form-control"></textarea> -->
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="product.price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    @keyup.188="addTag()"
                    placeholder="Product tags"
                    v-model="tag"
                    class="form-control"
                  />

                  <div class="d-flex">
                    <p v-for="tag in product.tags">
                      <span class="p-1">{{tag}}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage" class="form-control" />
                </div>

                <div class="form-group d-flex">
                  <div class="p-1" v-for="(image, index) in product.images">
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="80px" />
                      <span class="delete-img" @click="deleteImage(image,index)">X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal-footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              @click="addProduct()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'new'"
            >Save changes</button>
            <button
              @click="updateProduct(product)"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'edit'"
            >Apply changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";

export default {
  name: "Products",
  components: { VueEditor },
  props: {
    msg: String
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      },
      activeItem: null,
      modal: null,
      tag: null
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    reset(){
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      }
    },
    deleteImage(img,index){
      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index,1);
      image.delete().then(()=>{
        console.log('Image deleted');
      }).catch((error)=>{
        console.log('Error occurred');
      });
    },
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb.storage().ref("products/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on("state_changed",snapshot => {
            // Observe state change events such as progress, pause, and resume
          },
          error => {
            // Handle unsuccessful uploads
          },() => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.product.images.push(downloadURL);
              console.log("File available at", downloadURL);
            });
          }
        );
        //console.log(e.target.files[0]);
      }
    },
    addNew() {
      this.modal = "new";
      this.reset();
      $("#product").modal("show");
    },

    updateProduct(product) {
      /* ยังแก้ไม่ได้    **ได้แล้ว */
      //console.log(this.$firestore.products.doc(product['.key']));

      //  this.$firestore.products.doc(product['.key']).update({  //WORK
      //   name: "Amrani HoussainNEW",
      //   github: "@amranidev"
      //   });

      // const newPr = Object.assign({},this.product);
         this.$firestore.products.doc(product['.key']).update({
           name:this.product.name,
           description:this.product.description,
           price:this.product.price,
           tags:this.product.tags,
           images:this.product.images
         });
      //     // this.$firestore.products.doc(this.product.id).update(this.product);
      //    // this.$firestore.products.doc(product['.key']).update(this.product);
      //     console.log(newPr);

      /*
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      */
      Toast.fire({
        type: "success",
        title: "Updated  successfully"
      });

      $("#product").modal("hide");
    },
    editProduct(product) {
      this.modal = "edit";
      this.product = product;
      $("#product").modal("show");
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.products.doc(doc[".key"]).delete();
          // console.log(doc['.key']);

          Swal.fire("Deleted!", "Deleted successfully.", "success");
          // Toast.fire({           //***ดี */
          // icon: 'success',
          // title: 'Signed in successfully'
          // });
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);

      Toast.fire({
        icon: "success",
        title: "Product created successfully"
      });

      $("#product").modal("hide");
    }
  },

  create() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>
