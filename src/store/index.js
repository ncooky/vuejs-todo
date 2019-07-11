import Vue from 'vue';
import Vuex from 'vuex';
import uuidv4 from 'uuid/v4';

import actionTypes from './action-types';
import mutationTypes from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: {
      todo: [],
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
    [mutationTypes.ADD_NEW_TASK_TO_LIST](state, { taskContent }) {
      const newTask = {
        id: uuidv4(),
        content: taskContent,
        isCompleted: false,
      };
      console.log('New task created', newTask);
      state.tasks.todo.unshift(newTask);
    },
  },
  actions: {
    [actionTypes.TOGGLE_TASK_IS_COMPLETED]({ commit }, { taskId, isCompleted }) {
      const tagetMutationType = isCompleted ? mutationTypes.UNDO_COMPLETED_TASK
        : mutationTypes.MARK_TASK_TO_COMPLETED;
      commit(tagetMutationType, { taskId });
    },
    [actionTypes.ADD_NEW_TASK]({ commit }, { taskContent }) {
      commit(mutationTypes.ADD_NEW_TASK_TO_LIST, { taskContent });
    },
  },
});

export default store;
