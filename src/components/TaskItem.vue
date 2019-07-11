<template>
  <div class="task-item">
    <input class="task-checkbox" type="checkbox" :id="taskIdWithPrefix" :checked="isCompleted" @change="toggleIsCompleted" />
    <label class="task-content" :for="taskIdWithPrefix">{{ taskContent }}</label>
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
  padding: 5px 0;
  .task-checkbox {

  }
  .task-content {
    font-size: 16px;
    line-height: 1.3;
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
