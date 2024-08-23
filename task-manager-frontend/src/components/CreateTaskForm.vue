<template>
    <div>
      <h1>Create New Task</h1>
      <form @submit.prevent="createTask">
        <label for="title">Title:</label>
        <input v-model="task.title" type="text" id="title" required />
        <label for="description">Description:</label>
        <textarea v-model="task.description" id="description"></textarea>
        <button type="submit">Create Task</button>
      </form>
    </div>
  </template>

  <script>
  import taskService from '@/services/taskService';

  export default {
    data() {
      return {
        task: {
          title: '',
          description: ''
        }
      };
    },
    methods: {
      async createTask() {
        await taskService.createTask(this.task);
        this.$router.push('/');
      }
    }
  };
  </script>
