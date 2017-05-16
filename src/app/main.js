import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
import router from './router'
import store from './store'

require('../style/style.scss')

Vue.use(Resource)
Vue.config.devtools = process.env.NODE_ENV === 'development'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  router,
  components: {
    App
  }
})
