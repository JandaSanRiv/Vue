<template>
  <div>
    <h1 v-if="condition1" v-once v-text="text">Loading...</h1>
    <h2 v-else-if="condition2" v-html="html" />
    <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />

    <div v-show="conPermisos">
      <h1>Informacion confidencial</h1>
    </div>
    <div v-show="publica">
      <h1>Informacion publica</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition1: false,
      condition2: true,
      conPermisos: false,
      publica: true,
      //v-text
      text: 'Directive text...',
      // v-html
      html: 'Stylise</br>HTML in <br/><b>your data</b>',
      // v-bind
      link: {
        url: 'https://google.com',
        target: '_blank',
        tabindex: '0',
        title: 'Go to Google',
      },
    }
  },
  methods: {
    test: function() {
      this.text = 'Gato!!!!'
      return this.text
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0, 0;
  font-weight: normal;
}
</style>
