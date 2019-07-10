<template>
  <div class="about">
    <TaskList task-list-id="completed" empty-message="Carry on! No completed tasks yet." :tasks="completedTodoItems" />
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
    completedTodoItems() {
      return this.$store.state.tasks.completed;
    },
  },
};
</script>
