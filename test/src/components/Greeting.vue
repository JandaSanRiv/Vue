<template>
  <div>
    <h3>Ejercicio Greeting</h3>
    <div>{{ greeting }} {{ who }}</div>
  </div>
</template>
<script>
export default {
  props: ["greeting", "who"],
};
</script>