<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <router-link :to="'/task/' + task.id">{{ task.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tasks'],
  };
  </script>
  