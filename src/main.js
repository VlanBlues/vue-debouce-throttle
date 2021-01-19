import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {debounce, throttle} from '@/utils/debouce-throttle'

Vue.config.productionTip = false
Vue.prototype.$testDebounce = debounce()
Vue.prototype.$testThrottle = throttle()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
