import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  // Customized render function to pass in properties from our root element
  // Uses render (h) rather than h => to ensure that `this` is the Vue app.
  // Essentially allows any data tags to get passed in to matching properties
  // in App.vue. This lets us mount our app in a variety of contexts, for
  // example showing events for a particular subject, and toggling various
  // navigation elements based on appropriateness
  // h in this case is Vue-shorthand for createElement
  // https://vuejs.org/v2/guide/render-function.html#createElement-Arguments
  render (h) { return h(App, { props: this.$el.dataset }) }
}).$mount('#app')
