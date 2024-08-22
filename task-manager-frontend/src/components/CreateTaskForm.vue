<template>
    <div>
      <h2>Create New Task</h2>
      <form @submit.prevent="createTask">
        <input v-model="title" placeholder="Title" required />
        <textarea v-model="description" placeholder="Description"></textarea>
        <button type="submit">Create Task</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
      };
    },
    methods: {
      createTask() {
        // Logic to create a new task
      },
    },
  };
  </script>
  