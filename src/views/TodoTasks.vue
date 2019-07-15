<template>
  <div class="todo-tasks-page">
    <div class="new-task-input-wrapper">
      <input class="new-task-input" v-model.trim="newTaskContent" />
      <button class="new-task-button" @click="addNewTask">Add Task</button>
    </div>
    <TaskList task-list-id="todo" empty-message="Congrats! You've completed all tasks." :tasks="todoItems" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import actionTypes from '@/store/action-types';

export default {
  name: 'home',
  components: {
    TaskList,
  },
  data: () => ({
    newTaskContent: '',
  }),
  computed: {
    todoItems() {
      return this.$store.state.tasks.todo;
    },
  },
  methods: {
    addNewTask() {
      if (!this.newTaskContent) {
        return;
      }

      const { dispatch } = this.$store;
      dispatch(actionTypes.ADD_NEW_TASK, {
        taskContent: this.newTaskContent,
      });

      this.newTaskContent = '';
    },
  },
};
</script>


<style scoped lang="scss">
.todo-tasks-page {
  .new-task-input-wrapper {
    .new-task-input {
      width: 200px;
      margin-right: 15px;
    }
  }
}
</style>
