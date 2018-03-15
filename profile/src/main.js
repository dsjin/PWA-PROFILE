// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import VueTouch from 'vue-touch';

Vue.config.productionTip = false
Vue.use(vueResource)
VueTouch.registerCustomEvent('horizontal-pan', {
  type: 'pan',
  direction: 'horizontal'
})
Vue.use(VueTouch)

/* eslint-disable no-new */
Vue.mixin({
    methods: {
      $getData : async (url, target) => {
        let data = await Vue.http.get(url)
        data.body.forEach(item => {
          target.push(item)
        })
      }
    }
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
