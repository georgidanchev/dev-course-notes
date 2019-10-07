import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import actions from './actions';
import getters from './getters';
import mutations from './mutation';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  // Getting Data
  getters,
  // Making Changes
  mutations,
  // Importing actions
  actions,
  // Importing modules
  modules: {
    counter,
  },
});
