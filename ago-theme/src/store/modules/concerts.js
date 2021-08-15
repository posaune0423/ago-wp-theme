import $axios from '@/plugins/axios';

const state = {
  concerts: []
};

const getters = {
  getConcerts: (state) => state.concerts
};

const mutations = {
  setConcert(state, concerts) {
    state.concerts = concerts;
  }
};
const actions = {
  async fetchConcerts(context, page = 1, limit = 3) {
    $axios.get(`wp/v2/concerts?per_page=${limit}&page=${page}`).then((res) => {
      context.commit('setConcert', res.data);
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
