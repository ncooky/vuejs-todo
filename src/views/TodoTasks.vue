<template>
  <div class="home">
    <TaskList task-list-id="todo" empty-message="Congrats! You've completed all tasks." :tasks="todoItems" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'home',
  components: {
    TaskList,
  },
  computed: {
    todoItems() {
      return this.$store.state.tasks.todo;
    },
  },
};
</script>
