<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <AppProfileForm  />
      <AppProfileDisplay />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppProfileForm from './components/AppProfileForm.vue'
import AppProfileDisplay from './components/AppProfileDisplay.vue'

export default {
  components: {
    AppHeader,
    AppProfileForm,
    AppProfileDisplay,
  },
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    update(formData) {
      this.formData = formData
    }
  }
}
</script>
<style>
button {
    padding: 3px;
    padding-left: 6px;
    padding-right: 6px;
    margin: 2px;
    border: 1px solid #8323c3;
    border-radius: 4px;
    color: #1f1fbb;
    background-color: #efd8ff;
    font-weight: bold;
}
</style>
