<template>
  <section class="items">
        <h4>Pick your items</h4>
        <div v-for="(product, n) in products" :key="n"
            class="product"
            @click="selectProduct(product)"
            :class="{selected:product.active}">
            <div class="photo">
                <img :src="product.photo">
            </div>
            <div class="description">
                <span class="name">{{ product.name }}</span>
                <span class="price">{{ product.price }}</span>
                <div class="quantity-area">
                    <template v-if="product.active">
                        <!-- @click.stop evita que el evento click se propage al arbol DOM -->
                        <button :disabled="product.quantity<=1" @click.stop="incrementDecrementQuantity(product,-1)">-</button>
                        <span class="quantity">{{ product.quantity }}</span>
                        <button @click.stop="incrementDecrementQuantity(product,1)">+</button>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
           
        }
    },
    methods: {
        selectProduct: function (item){
            item.active = !item.active;
            if (!item.active)
                item.quantity=1;
            this.$emit('productoModificado', item);
        },
        incrementDecrementQuantity: function(item, qty){
            item.quantity+=qty;
            this.$emit('productoModificado', item);
        }
    },
    props : ["products"],
}
</script>

<style>

</style>