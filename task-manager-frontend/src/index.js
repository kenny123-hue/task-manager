import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '../components/TaskList.vue';
import TaskDetails from '../components/TaskDetails.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/task/:id',
      name: 'TaskDetails',
      component: TaskDetails,
      props: true
    }
  ]
});
