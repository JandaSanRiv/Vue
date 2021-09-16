<template>
  <div id="app">
    <Repeat :config="{ times: 3, content: 'Repeat me.' }" />
    <hr />
    <h3>Mi repeat</h3>
    <Repeat2 :config="{ times: 3, content: 'Repeat me.' }"/>
  </div>
</template>

<script>
import Repeat from './components/Repeat.vue'
import Repeat2 from './components/Repeat2.vue'

export default {
  components: {
    Repeat,
    Repeat2 
  }
}
</script>
