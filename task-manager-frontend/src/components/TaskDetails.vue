<template>
    <div>
      <h2>{{ task.title }}</h2>
      <p>{{ task.description }}</p>
      <button @click="markComplete">Mark as Completed</button>
      <router-link to="/">Back to Task List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['task'],
    methods: {
      markComplete() {
        // Logic to mark the task as completed
      },
    },
  };
  </script>
  