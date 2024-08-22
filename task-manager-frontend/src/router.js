import Vue from 'vue';
import Router from 'vue-router';
import TaskList from './components/TaskList.vue';
import TaskDetails from './components/TaskDetails.vue';
import CreateTaskForm from './components/CreateTaskForm.vue';
import EditTaskForm from './components/EditTaskForm.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: TaskList },
    { path: '/task/:id', component: TaskDetails, props: true },
    { path: '/create', component: CreateTaskForm },
    { path: '/edit/:id', component: EditTaskForm, props: true },
  ],
});
