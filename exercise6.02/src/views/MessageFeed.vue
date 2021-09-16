<template>
  <div>
    <h2>Message Feed</h2>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
    
    <span class="parametro"> {{$route.params.pollo}}</span>
   <button @click="regresar()">Back</button>
    <!-- <button @click="about()">About</button> -->
    <button @click="navega">About</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      messages: [
        "Hello, how are you?",
        "The weather is nice",
        "This is message feed",
        "And I am the fourth message",
      ],
    };
  },
  methods: {
    regresar: function () {
      this.$router.go(-1); //no funciona
    },
    about() {
      this.$router.push("/about");
    },
    navega: function () {
      this.$router.push("/about");
    },
  },
};
</script>