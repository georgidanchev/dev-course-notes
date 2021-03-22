// export const updateValue = ({ commit }, payload) => {
//   commit('updateValue', payload);
// };

import * as types from './types';

export default {
  [types.UPDATE_VALUE]: ({ commit }, payload) => {
    commit(types.MUTATE_UPDATE_VALUE, payload);
  },
};
