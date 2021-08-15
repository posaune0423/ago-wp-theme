import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import loader from './modules/loader';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    menu,
    loader
  }
});
