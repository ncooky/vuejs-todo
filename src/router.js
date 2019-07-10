import Vue from 'vue';
import Router from 'vue-router';
import TodoTasks from './views/TodoTasks.vue';
import CompletedTasks from './views/CompletedTasks.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo-tasks',
      component: TodoTasks,
    },
    {
      path: '/completed',
      name: 'completed-tasks',
      component: CompletedTasks,
    },
  ],
});
