import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store/store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

// auto global registration components from ./components which begins with 'Base*'
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
// the end of the auto global registration

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
