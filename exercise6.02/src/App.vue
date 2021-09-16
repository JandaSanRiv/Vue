<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link :to="{path: '/', params: {demo: 'este es un parametro de entrada'}}">Home</router-link> | -->
      <router-link :to="{name: 'Home', params: {demo: 'este es un parametro de entrada'}}">Home</router-link> |
      <router-link :to="{name: 'About', params: {author : 'Alma A. Sanchez'}}">About</router-link> |
      <router-link :to="{name: 'messageFeed', params: {pollo: 'es volador'}}">Messages</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.parametro{
  color:rgb(185, 30, 30);
  width: 250px;
  background-color: rgb(154, 215, 255);
}
</style>
