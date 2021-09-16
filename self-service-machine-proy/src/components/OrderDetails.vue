<template>
  <section class="summary" v-if="productList.length>0">
    <!-- <p v-for="(product, idx) in productList" :key="idx">Hola {{product.name}} {{product.price}}</p> -->
    <strong>Order Details</strong>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, idx) in productList" :key="idx" >
          <td>{{ product.quantity }} x {{ product.name }}</td>
          <td>${{ product.price }}</td>
        </tr>
        <!-- <tr>
          <td>1x Big Mac</td>
          <td>5.99</td>
        </tr>

        <tr>
          <th>Total</th>
          <th>5.99</th>
        </tr> -->
        <tr>
          <th>Total</th>
          <th>${{this.getTotal().toFixed(2)}}</th>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
    };
  },
  methods: {
      getTotal(){
          let total = 0;
        this.productList.forEach(product => {
        console.log(`producto: ${product.name}, precio: ${product.price}, cantidad: ${product.quantity}`)
        total += product.price * product.quantity;
      });
      return total;
      }
  },
  props: {
    product: {
      type: Array,
    },
    productList: {
      type: Array,
    },
  },
};
</script>

<style>
</style>