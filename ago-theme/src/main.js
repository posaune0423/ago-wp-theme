import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import './plugins/vuelidate';
import './plugins/vuehead';

require('@/assets/styles/base.scss');

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false;
}
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
