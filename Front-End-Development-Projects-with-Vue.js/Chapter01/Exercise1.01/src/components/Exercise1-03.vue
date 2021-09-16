<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <ul>
      <li>{{ items[0] }}</li>
      <li>{{ items[1] }}</li>
      <li>{{ items[2] }}</li>
    </ul>
    <span class="spStyle">Span del hijo03</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My list component!',
      subtitle: 'Vue JS basics',
      items: ['Item1', 'Item2', 'Item3'],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/typography';
h1 {
  font-size: 50px;
  color: $color-blue; // Use variables from imported stylesheets
}
</style>
