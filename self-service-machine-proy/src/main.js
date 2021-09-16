import Vue from 'vue'
import App from './App.vue'
import router from './router'//agregue esta linea

Vue.config.productionTip = false

new Vue({
  router,//agregue esta linea
  render: h => h(App),
}).$mount('#app')
