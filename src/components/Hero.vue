<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Vue Shop ยังไม่รู้จะขายอะไร
                </h1>
                <p>
                  ขายอะไรก็ได้กูไม่ได้ขอตังใคร หามันด้วยตัวเองกูทำให้แม่ภูมิใจ เพลงกูเปิดทุกที่น่ะให้มันเตือนมึงไว้ ค่อยมาวัดกับกูวันที่มึงมีตังใช้
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary" @click="toProductPage">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/graphic.svg" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  },
  methods:{
    toProductPage(){
      this.$router.replace("products");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
</style>