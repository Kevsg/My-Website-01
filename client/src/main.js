// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// this is app entry point
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

require('vue2-animate/dist/vue2-animate.min.css')

// eslint-disable-next-line
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
