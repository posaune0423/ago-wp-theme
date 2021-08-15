import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import loader from './modules/loader';
import news from './modules/news';
import concerts from './modules/concerts';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    menu,
    loader,
    news,
    concerts
  }
});
