// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

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
  components: { App }
})
