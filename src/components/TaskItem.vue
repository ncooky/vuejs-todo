<template>
  <div class="task-item">
    <input type="checkbox" :id="taskIdWithPrefix" :checked="isCompleted" @change="toggleIsCompleted" />
    <label class="content" :for="taskIdWithPrefix">{{ taskContent }}</label>
  </div>
</template>

<script>
import actionTypes from '@/store/action-types';

export default {
  name: 'TaskItem',
  props: {
    taskId: String,
    taskContent: String,
    isCompleted: Boolean,
  },
  computed: {
    taskIdWithPrefix() {
      return `task-${this.taskId}`;
    },
  },
  methods: {
    toggleIsCompleted() {
      const { dispatch } = this.$store;
      dispatch(actionTypes.TOGGLE_TASK_IS_COMPLETED, {
        taskId: this.taskId,
        isCompleted: this.isCompleted,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.task-item {
}
</style>
