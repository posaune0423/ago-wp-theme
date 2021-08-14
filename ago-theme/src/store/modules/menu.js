export default {
  namespaced: true,
  state: {
    isActive: false
  },
  getters: {
    getIsActive: (state) => {
      return state.isActive;
    }
  },
  mutations: {
    toggleMenu: (state) => {
      state.isActive = !state.isActive;
    },
    closeMenu: (state) => {
      state.isActive = false;
    }
  }
};
