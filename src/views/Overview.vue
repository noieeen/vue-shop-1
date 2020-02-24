<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 jusify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Overview Page</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              reiciendis reprehenderit nemo distinctio, quis nulla amet nam
              earum doloremque nostrum excepturi corrupti delectus assumenda
              molestias, eius necessitatibus. Magnam, eum dolorem?
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/overviewPage.png" alt="" class="img-fluid" />
          </div>

          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
          <div class="col-md-6"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
