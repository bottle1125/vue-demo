import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import TimeComplete from './components/TimeComplete'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);
Vue.use(VueResource);


const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/time-entries',
    component: TimeEntries,
    children: [{
        path: 'log-time',
        component: resolve => require(['./components/LogTime.vue'],resolve)
    }]
}, {
    path: '/time-complete',
    component: resolve => require(['./components/TimeComplete.vue'],resolve)
}];

const router = new VueRouter({
    routes
});

Vue.filter('completed', function(plan) {
  return plan.progress === '已完成' ? plan : '';
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
