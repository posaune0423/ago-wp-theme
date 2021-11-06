import $axios from '@/plugins/axios';

const state = {
  news: []
};

const getters = {
  getNews: (state) => state.news
};

const mutations = {
  setNews(state, news) {
    state.news = news;
  }
};

const actions = {
  async fetchNews(context, page = 1, limit = 3) {
    $axios.get(`wp/v2/posts?per_page=${limit}&page=${page}`).then((res) => {
      context.commit('setNews', res.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
