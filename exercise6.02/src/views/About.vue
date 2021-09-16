<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="navega">Mensajes</button>
    <h3 class="parametro"> {{$route.params.author}}</h3>
  </div>
</template>

<script>
export default {
  methods: {
    navega: function(){      
      this.$router.push("/messages")
    }
  }
}
</script>