<template>
  <div>
    <div class="container">
      <input type="number" v-model="incrementOne" />
      <h3>Get input: {{ incrementOne }}</h3>
      <h5>Set division: {{ divideByTwo }}</h5>
      <h3>Get input again: {{ incrementOne }}</h3>
      <!-- mis modificaciones libres -->

      <h5>Set count: {{ count }}</h5
      ><!-- mis modificaciones libres -->
      <h5>IVA de input: {{ IVA }}</h5
      ><!-- mis modificaciones libres -->
    </div>
    <div class="container">
      <h1>Shop Watcher</h1>

      <div>
        Black Friday sale
        <strike>Was {{ oldDiscount }}%</strike>
        <strong> Now {{ discount }}% OFF</strong>
      </div>
      <br />
      <a href="#" @click="updateDiscount">Increase Discount!</a>
    </div>
    <div class="container">
      <h1>Deep Watcher</h1>
      <div>
        <h4>{{ product.label }}</h4>
        <h5>${{ product.price }} (${{ discount }} Off)</h5>
      </div>
      <a href="#" @click="updatePrice">Reduce Price!</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: -1,
      divideByTwo: 0,
      IVA: 0, // mis modificaciones libres

      oldDiscount: 0,
      discount: 5,

      organization: {
        name: 'ABC',
        employees: ['Jack', 'Jill'],
      },
      product: {
        price: 25,
        label: 'Blue juice',
      },
    }
  },
  computed: {
    incrementOne: {
      // getter
      get() {
        console.log(
          ` -:- Get -:-Le sumo un 1 a count ${
            this.count
          } y se le asigna a incrementOne ${this.count + 1}`
        ) // mis modificaciones libres
        return this.count + 1
      },
      // setter
      set(val) {
        console.log(
          ` -:- Set -:-Le resto un 1 a val ${val} y se le asigna a incrementOne ${val -
            1}`
        ) // mis modificaciones libres
        this.count = val - 1
        this.divideByTwo = val / 2
        console.log(
          ` -:- divideByTwo -:- es igual a val/2 = ${val}/2 = ${val / 2}`
        ) // mis modificaciones libres
        this.IVA = val * 0.16 // mis modificaciones libres
      },
    },
  },

  methods: {
    updateDiscount() {
      this.discount = this.discount + 5
    },
    updatePrice() {
      if (this.product.price < 1) return
      this.product.price--
    },
    sendIntercomData() {
      // alert('Message sent to IntercomData')
    },
  },
  watch: {
    discount(newValue, oldValue) {
      console.log(
        `Hubo un cambio en discount, el nuevo calor es ${newValue} y el viejo valor es ${oldValue}`
      )
      this.oldDiscount = oldValue
    },
    'organization.name': {
      handler: function(v) {
        this.sendIntercomData()
      },
      immediate: true,
    },
    // 'product.price'() {
    product: {
      handler: function(v) {
        this.discount++
      },
      deep: true, // deep = true, altes tambien a los hijos, si se pone false, solo altera al elemento modificado
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}

.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
