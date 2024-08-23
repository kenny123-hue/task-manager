<template>
    <div>
      <h1>Edit Task</h1>
      <form @submit.prevent="updateTask">
        <label for="title">Title:</label>
        <input v-model="task.title" type="text" id="title" required />
        <label for="description">Description:</label>
        <textarea v-model="task.description" id="description"></textarea>
        <button type="submit">Update Task</button>
      </form>
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
      },
      async updateTask() {
        await taskService.updateTask(this.$route.params.id, this.task);
        this.$router.push('/');
      }
    }
  };
  </script>

