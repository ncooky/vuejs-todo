<template>
  <div class="task-list">
    <div class="task-items" v-if="tasks && tasks.length">
      <TaskItem v-for="task in tasks" :key="task.id" :task-content="task.content" :is-completed="task.isCompleted" />
    </div>
    <div class="empty-message" v-else>{{ emptyMessage || 'No tasks' }}</div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  props: {
    taskListId: String,
    title: String,
    emptyMessage: String,
    tasks: Array,
  },
};
</script>

<style scoped lang="scss">
.task-list {
}
</style>
