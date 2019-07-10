import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      todo: [{
        id: '1',
        content: 'Buy mike',
        isCompleted: false,
      }, {
        id: '2',
        content: 'Reply to Tom',
        isCompleted: false,
      }, {
        id: '3',
        content: 'Follow up app crash error',
        isCompleted: false,
      }],
      completed: [],
    },
  },
  mutations: {

  },
  actions: {

  },
});
