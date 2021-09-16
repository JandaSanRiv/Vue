<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <!--Los siguientes dos son equivalentes-->
      <AppProfileForm  @submit="update($event)" v-on:clear="clear($event)"/>
      <!-- <AppProfileForm  v-on:submit="update($event)"/> -->
      <AppProfileDisplay :formData="formData"/>
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
      // eslint-disable-next-line no-console
      console.log(formData)
    },
    clear(formData){
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
