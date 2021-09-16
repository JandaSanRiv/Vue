<template>
  <div>
    <h1>Hello {{ who }} {{ greeting }}</h1>
    <h1>You are a(n) {{ position }}</h1>
  </div>
</template>

<script>
export default {
  props: ["who", "greeting", "position"],
};
</script>


<style>
</style>
