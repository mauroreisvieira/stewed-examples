import Vue from 'vue'
import App from './App.vue'

import router from './scripts/router'
import { store } from './scripts/store';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
