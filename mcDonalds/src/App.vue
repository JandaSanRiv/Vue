<template>
  <main id="app">
    <DisplayProducts v-bind:products="this.products" v-on:productoModificado="sincronizaProducto" />
    <SummaryComponent v-bind:activeProducts="selectedProducts" />
  </main>
</template>

<script>
import DisplayProducts from './components/DisplayProducts.vue';
import SummaryComponent from './components/SummaryComponent.vue';
export default {
  name: 'App',
  methods: {
    sincronizaProducto: function(p) {
      let producto = this.products.find(producto =>producto.id == p.id);
      producto.active = p.active;
      producto.quantity = p.quantity;
    }
  },
  computed: {
    selectedProducts () {
      return this.products.filter((producto)=>{
        return producto.active
      });
    }
  },
  data() {
    return {
       products: [
          {
              "id":1,
              "photo": "/img/big-mac.png",
              "name": "Big Mac",
              "price": 5.99,
              "active": false,
              "quantity": 1
          },
          {
              "id":2,
              "photo": "/img/mc-chicken.png",
              "name": "Mc Chicken",
              "price": 4.99,
              "active": false,
              "quantity": 1
          },
          {
              "id":3,
              "photo": "/img/double-cb.png",
              "name": "Double Cheese Burger",
              "price": 2.99,
              "active": false,
              "quantity": 1
          },
          {
              "id":4,
              "photo": "/img/fries.png",
              "name": "Fries",
              "price": 2.99,
              "active": false,
              "quantity": 1
          },
          {
              "id":5,
              "photo": "/img/nuggets.png",
              "name": "Mc Nuggets",
              "price": 3.49,
              "active": false,
              "quantity": 1
          },
          {
              "id":6,
              "photo": "/img/salad.png",
              "name": "Salad",
              "price": 2.79,
              "active": false,
              "quantity": 1
          },
          {
              "id":7,
              "photo": "/img/cola.png",
              "name": "Coke",
              "price": 1.99,
              "active": false,
              "quantity": 1
          },
          {
              "id":8,
              "photo": "/img/lipton.png",
              "name": "Ice Tea",
              "price": 1.99,
              "active": false,
              "quantity": 1
          },
          {
              "id":9,
              "photo": "/img/water.png",
              "name": "Water",
              "price": 1.49,
              "active": false,
              "quantity": 1
          }
        ],
    }
  },
  components: {
    DisplayProducts, 
    SummaryComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

main > section.items h4 {
    text-align: center;
    margin-top: 0;
    width: 100%;
}
main {
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-wrap: wrap;
    padding-top: 20px;
}

main > section.items {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid lightgrey;
    padding: 20px;
    max-width: 500px;
    min-width: 300px;
    justify-content: center;
    
}

section.items .product {
    border: 1px solid lightgrey;
    margin: 6px;
    flex: 0 0 calc(33.333% - 24px);
    cursor: pointer;
    text-align: center;
}

section.items .product.selected {
    border: 2px solid rgb(29, 134, 233);

}

section.items .photo img {
    max-width: 90px;
}

section.items .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 11px;
    line-height: 15px;
}

section.items  .description .price {
    font-weight: bold;
    margin: 4px auto;
}

section.items  .description .quantity-area {
    margin: 8px auto;
    height: 14px;
}

section.items  .description .quantity-area button {
    width: 16px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

section.items  .description .quantity-area .quantity {
    font-weight: bold;
    margin: 0 4px;
}


section.summary {
    background-color: rgb(245, 245, 245);
    padding: 20px;
    min-height: 200px;
    min-width: 200px;
    text-align: center;
}

section.summary table {
    width: 100%;
    padding-top: 12px;
    font-size: 11px;
    margin: auto;
}

section.summary table tbody tr:last-of-type th {
    border-top: 1px solid black;
    padding-top: 4px;
}
</style>
