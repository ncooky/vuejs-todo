<template>
  <div class="task-item">
    <input type="checkbox" :id="taskIdWithPrefix" :checked="isCompleted"/>
    <label class="content" :for="taskIdWithPrefix">{{ taskContent }}</label>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    taskId: String,
    taskContent: String,
    isCompleted: Boolean,
  },
  computed: {
    taskIdWithPrefix: function() {
      return `task-${this.taskId}`;
    }
  }
};
</script>

<style scoped lang="scss">
.task-item {
}
</style>
