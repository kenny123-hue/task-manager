import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '@/components/TaskList';
import TaskDetails from '@/components/TaskDetails';
import CreateTask from '@/components/CreateTask';
import EditTask from '@/components/EditTask';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: TaskList },
    { path: '/tasks/:id', component: TaskDetails },
    { path: '/create', component: CreateTask },
    { path: '/edit/:id', component: EditTask }
  ]
});
