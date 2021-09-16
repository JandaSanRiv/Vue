<template>
  <section class="md:w-1/3 flex flex-col p-12" v-if="validateFormData()"
    id="secProfile">
  <!-- Profile Card -->
    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
    <p class="mt-2">{{ formData.occupation }}</p>
  </section>
</template>

<script>
import eventBus from '../event-bus';// Importamos al bus de eventos
export default {
  mounted(){
    eventBus.$on('profileUpdate', this.update)// Oye eventBus, ahi te encargo me avises cuando alguien
                                              // invoque un profileUpdate
  },
  beforeDestroy(){
    eventBus.$off('profileUpdate', this.update)
  },
  methods: {
    validateFormData() {
      return (
        Object.keys(this.formData).length>0 &&
        this.formData.name != "" &&        
        this.formData.occupation != ""
      );
    },
    update(formData){
      this.formData = formData
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  /*
  props: { //Ya no usamos una prop, porque la info ya no viene del padre
    formData: {
      type: Object,
      default() {
        return {}
      }
    }
  }*/
}
</script>
<style scoped>
#secProfile {
  background-color: #e8f0f5;
  color: #1f8edc;
  border: 1px solid #1f8edc;
}
</style>