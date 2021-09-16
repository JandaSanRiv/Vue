<template>
  <header class="w-full block p-4 border-b bg-blue-300 border-gray-700">
    <h2 class="text-xl text-gray-800">Profile Card Generator</h2>
    <button
      @click="clear()"
      class="flex ml-auto text-gray-800 items-center button"
    >
      Reset
    </button>

  </header>
</template>
<script>
import eventBus from '../event-bus';// Importamos al bus de eventos
export default({
  methods:{
    clear: function(){
      eventBus.$emit('profileUpdate', {})

    }
  },
})
</script>

