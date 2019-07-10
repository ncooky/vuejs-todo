import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      todo: [{
        id: '1',
        content: 'It\'s the content of the task',
        isCompleted: true,
      }],
      completed: [],
    },
  },
  mutations: {

  },
  actions: {

  },
});
