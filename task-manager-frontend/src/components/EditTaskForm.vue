<template>
    <div>
      <h2>Edit Task</h2>
      <form @submit.prevent="editTask">
        <input v-model="task.title" required />
        <textarea v-model="task.description"></textarea>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['task'],
    methods: {
      editTask() {
        // Logic to edit the task
      },
    },
  };
  </script>
  