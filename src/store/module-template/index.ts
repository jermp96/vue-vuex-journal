import state from './state';
import  * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const myContumModule = {
  namespace: true,
  actions,
  mutations,
  getters,
  state
};

export default myContumModule;