<template>
  <div class="home">
    <TaskItem taskContent="It's task content" taskId="1" :isCompleted="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'home',
  components: {
    TaskItem,
  },
};
</script>
