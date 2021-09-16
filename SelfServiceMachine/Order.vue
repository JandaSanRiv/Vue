<template>
  <div>
    <h3>OrderDetails</h3>
    <div>{{ greeting }} {{ who }}</div>
  </div>
</template>
<script>
export default {
  data() {
        return {
            order: {}
        }
    },
    props: {
        product: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
};
</script>