<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center">
    <!-- Inputs -->
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        v-model="name"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex flex-col mt-2">
      <label class="flex text-gray-800 mb-2" for="occupation">Occupation</label>
      <input
        id="occupation"
        type="text"
        name="occupation"
        v-model="occupation"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      />
    </div>
    <div class="flex flex-row mt-12">
      <button type="submit" @click="submitForm()" class="button">Submit</button>
    </div>
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
  data() {
    return {
      name: '',
      occupation: '',
    }
  },
  methods: {
    submitForm() {
      eventBus.$emit('profileUpdate', {
        name: this.name,
        occupation: this.occupation
      })
      
    },
    update(formData){
      this.name = formData.name || '',
      this.occupation = formData.occupation || ''
    }
  }
}
</script>
