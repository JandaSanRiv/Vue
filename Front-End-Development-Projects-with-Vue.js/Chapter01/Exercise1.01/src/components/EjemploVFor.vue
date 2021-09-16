<template>
  <div>
    <h2>Looping through loops</h2>
    <div v-for="n in 2" :key="'loop-1-' + n">
      {{ n }}
    </div>

    <hr />
    <h1>Looping through arrays</h1>
    <ul>
      <li v-for="n in 5" :key="n">
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
