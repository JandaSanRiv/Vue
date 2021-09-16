<template>
  <div id="divLoginRoot">
    <div class="divLogin">
      <div class="divTit">Hola pollitos, este es el Login</div>
      <div class="divInput">
        <label for="txtUsr" class="lblUsr lblInput">Ingresa el usuario</label>
        <input id="txtUsr" class="txtInput" v-model="user" />
      </div>
      <div class="divInput">
        <label for="txtUsr" class="lblUsr lblInput">Contrase&ntilde;a</label>
        <input
          id="txtPassword"
          class="txtInput"
          v-model="password"
          type="password"
        />
      </div>
      <button @click="login()" class="btn" id="btnLogin">Iniciar sesion</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      realUser: "alma",
      realPwd: "Pollitos99",
    };
  },
  methods: {
    login() {
      if (this.user !== "" && this.password !== "") {
        if (this.user === this.realUser && this.password == this.password) {
          this.$router.push({ name: "Order", params: { isUserLogged: true } });
        } else {
          alert("Usuario y contrasena incorrectos");
        }
      }
      // router.push({ name: 'user', params: { userId: '123' } })
    },
  },
};
</script>

<style scoped>
.divOrder {
  background-color: rgb(249, 255, 158);
}
#divLoginRoot {
  display: flex;
  justify-content: center;
}
.divLogin {
  background-color: rgb(144, 162, 211);
  border: 2px solid #6e6e77;
  border-radius: 5px;
  width: 450px;
  /* left: 50%;
    right: 50%; */
  /* position: absolute; */
  padding: 30px;
  margin-top: 10px;
  font-size: 16px;
  color: #2222a0;
  font-weight: bold;
}
button#btnLogin {
    background-color: #d5ebf5;
    border: 1px solid #4b89bb;
    color: #208090;
    font-weight: bold;
    border-radius: 4px;
    padding: 5px;
    margin-top: 5px;
    float: right;
}

</style>

