<template>
    <div>
      <h1>Task Details</h1>
      <p><strong>Title:</strong> {{ task.title }}</p>
      <p><strong>Description:</strong> {{ task.description }}</p>
      <p><strong>Status:</strong> {{ task.is_completed ? 'Completed' : 'Not Completed' }}</p>
      <router-link :to="`/edit/${task.id}`">Edit Task</router-link>
    </div>
  </template>

  <script>
  import taskService from '@/services/taskService';

  export default {
    data() {
      return {
        task: {}
      };
    },
    created() {
      this.fetchTask();
    },
    methods: {
      async fetchTask() {
        const response = await taskService.getTask(this.$route.params.id);
        this.task = response.data.data;
      }
    }
  };
  </script>
