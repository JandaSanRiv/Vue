<template>
  <section class="items">
    <h4>Pick your items</h4>
    <div
      class="product"
      :class="{ selected: product.active }"
      v-for="(product, idx) in products"
      :key="idx"
      @click="selectProd(product)"
    >
      <div class="photo">
        <img :src="product.photo" />
      </div>
      <div class="description">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
        <div class="quantity-area">
          <!-- @click.stop evita que el evento click se propague al arbol (a los padres)-->
          <button
            class="btnLess"
            :disabled="product.quantity <= 1"
            @click.stop="product.quantity--" @click="updateOrder()"
          >
            -
          </button>
          <!-- click.stop funciona como un preventDefault-->
          <span class="quantity">{{ product.quantity }}</span>
          <button class="btnMore" @click.stop="product.quantity++" @click="updateOrder()">+</button>
        </div>
      </div>
    </div>
    <!-- <div class="product selected">
          <div class="photo">
            <img src="/img/big-mac.png" />
          </div>
          <div class="description">
            <span class="name">Big Mac</span>
            <span class="price">$ 5.99</span>
            <div class="quantity-area">
              <button>-</button>
              <span class="quantity">1</span>
              <button>+</button>
            </div>
          </div>
        </div> -->
    <!-- -->
  </section>
</template>
<script>
export default {
  methods: {
    updateOrder(){

      this.$emit("productosActivos", this.productList);
      console.log("lo que tengo ahorita es ")
      console.log(this.productList);
    },
    selectProd(product) {
      product.active = !product.active;
      if(!product.active){
        product.quantity = 1
      }
      this.updateOrder()
    }
  },
  data() {
    return {};
  },
  props: {
    products:{
      type: Array,
      required: true,
    },
    // productList:{
    //   type: Array
    // }    
  },
  computed: {
    productList(){
      return this.products.filter(product => product.active == true)
    }
  }
};
</script>

<style>
</style>