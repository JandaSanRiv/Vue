<template>
  <div>
    <div id="nav">
      <div v-if="!$route.params.isUserLogged" class="divOrder divMenu">
        <router-link :to="{ name: 'Login' }" class="linkMain">Login</router-link>
      </div>
      <div v-else class="divMenu">
        <!-- <router-link :to="{name: 'Login'}">Login</router-link> -->

      <router-link :to="{name: 'Login', params: {isUserLogged : false}}">Logout</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>

<style>
.divMenu {
    text-align: right;
    color: #525267;
    padding: 4px;
    height: 31px;
}
div#nav a{
    color: #d52ae0;
    font-weight: bold;
    float: right;
    margin: 6px;
}
div#nav {
    background-color: #d7d6e6;    
    /* padding: 16px; */
}
section.items {
    margin-top: 15px;
}
</style>