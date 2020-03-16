import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let currentCity = {
  id: 1,
  spell: 'beijing',
  name: '北京',
};
if (localStorage.currentCity) {
  try {
    currentCity = JSON.parse(localStorage.currentCity);
  } catch (e) {
    // continue
  }
}

export default new Vuex.Store({
  state: {
    currentCity,
  },
  mutations: {
    changeCurrentCity(state, city) {
      state.currentCity = city;
      if (localStorage) {
        localStorage.currentCity = JSON.stringify(city);
      }
    },
  },
  actions: {
  },
  modules: {
    city: {
      namespaced: true,
      state: {
        selectedAlpha: '',
      },
      mutations: {
        changeSelectedAlpha(state, alpha) {
          state.selectedAlpha = alpha;
        },
      },
    },
  },
});
