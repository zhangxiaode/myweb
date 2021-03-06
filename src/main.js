// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import kk from 'kangkang-ui'

import '@/style/reset.less'
import '@/style/common.less'
import '@/style/main.less'

import ajax from '@/utils/ajax'

Vue.config.productionTip = false
Vue.use(kk)
Vue.prototype.$ajax = ajax
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  mounted () {
  },
  template: '<App/>'
})
