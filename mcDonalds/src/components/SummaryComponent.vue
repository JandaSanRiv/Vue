<template>
  <section class="summary" v-if="total>0">
        <strong>Order Details</strong>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, n) in activeProducts" :key="n">
                    <template v-if="product.active">
                        <td>{{product.quantity + 'x ' + product.name}}</td>
                        <td>$ {{(product.quantity * product.price).toFixed(2)}}</td>
                    </template>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>{{ total }}</th>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    props: ["activeProducts"],
    computed: {
        total: function(){
            var total = 0;
            this.activeProducts.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }
            });
           return total.toFixed(2);
        }
    }
}
</script>

<style>

</style>