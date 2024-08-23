<template>
    <div>
      <h1>Task List</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <router-link :to="`/tasks/${task.id}`">{{ task.title }}</router-link>
          <button @click="markAsCompleted(task.id)">Mark as Completed</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
      <router-link to="/create">Create New Task</router-link>
    </div>
  </template>

  <script>
  import taskService from '@/services/taskService';

  export default {
    data() {
      return {
        tasks: []
      };
    },
    created() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        const response = await taskService.getTasks();
        this.tasks = response.data.data;
      },
      async markAsCompleted(id) {
        await taskService.completeTask(id);
        this.fetchTasks();
      },
      async deleteTask(id) {
        await taskService.deleteTask(id);
        this.fetchTasks();
      }
    }
  };
  </script>
