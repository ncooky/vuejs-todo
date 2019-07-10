import Vue from 'vue';
import Vuex from 'vuex';

import actionTypes from './action-types';
import mutationTypes from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
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
    [mutationTypes.MARK_TASK_TO_COMPLETED](state, { taskId }) {
      const targetTask = state.tasks.todo.find(task => (task.id === taskId));
      targetTask.isCompleted = true;
      state.tasks.todo = state.tasks.todo.filter(task => (task.id !== taskId));
      state.tasks.completed.unshift(targetTask);
    },
    [mutationTypes.UNDO_COMPLETED_TASK](state, { taskId }) {
      const targetTask = state.tasks.completed.find(task => (task.id === taskId));
      targetTask.isCompleted = false;
      state.tasks.completed = state.tasks.completed.filter(task => (task.id !== taskId));
      state.tasks.todo.unshift(targetTask);
    },
  },
  actions: {
    [actionTypes.TOGGLE_TASK_IS_COMPLETED]({ commit }, { taskId, isCompleted }) {
      const tagetMutationType = isCompleted ? mutationTypes.UNDO_COMPLETED_TASK
        : mutationTypes.MARK_TASK_TO_COMPLETED;
      commit(tagetMutationType, { taskId });
    },
  },
});

export default store;
