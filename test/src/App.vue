<template>
  <div id="app">
    <input type="text" v-model="nombre" />
    <input type="text" v-model="ocupacion" />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Hello who="Gato" greeting ="What's up?"/> -->
    <Hello
      :who="this.nombre"
      greeting="What's up?"
      v-bind:position="this.ocupacion"
    />
    <hr />
    <Greeting :greeting="greeting" :who="who" />
    <button @click="newGreeting()">New Greeting</button>
    <hr />
    <label for="txtNomEquipo">Ingresa el nombre de Equipo a consultar:</label>
    <input type="text" v-model="nomEquipo" id="txtNomEquipo"/>
    <InfoEquipo :nomEquipo="this.nomEquipo"/>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
import Greeting from "./components/Greeting.vue";
import InfoEquipo from "./components/InfoEquipo.vue"

const possibleGreetings = [
  { greeting: "Hello", who: "Vue.js" },
  { greeting: "Hey", who: "Everyone" },
  { greeting: "Hi", who: "JavaScript" },
];
export default {
  // name: "App",
  data() {
    return {
      nombre: "",
      ocupacion: "Software Developer Jr.",
      // greeting: "Hello",
      // who: "Vue.js",
      currentIndex: 0,


      nomEquipo: '',
    };
  },
  computed: {
    currentGreeting() {
      return possibleGreetings[this.currentIndex];
    },
    greeting() {
      return this.currentGreeting.greeting;
    },
    who() {
      return this.currentGreeting.who;
    },
  }
  ,methods: {
    newGreeting() {
    this.currentIndex = this.currentIndex === (possibleGreetings.length-1) ? 0 : this.currentIndex + 1}
  },
  components: {
    Hello,
    Greeting,
    InfoEquipo
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
