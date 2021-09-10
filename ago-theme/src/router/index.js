import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Top')
    },
    {
      path: '/about/',
      component: () => import('@/views/About')
    },
    {
      path: '/news/',
      component: () => import('@/views/News/Index')
    },
    {
      path: '/news/:id',
      component: () => import('@/views/News/Detail')
    },
    {
      path: '/concerts/',
      component: () => import('@/views/Concerts/Index')
    },
    {
      path: '/concerts/:id',
      component: () => import('@/views/Concerts/Detail')
    },
    {
      path: '/instructors/',
      component: () => import('@/views/Instructors/Index')
    },
    {
      path: '/contact/',
      component: () => import('@/views/Contact')
    },
    {
      path: '/thanks/',
      component: () => import('@/views/Thanks')
    },
    {
      path: '/search/',
      component: () => import('@/views/Search')
    },
    {
      path: '*',
      component: () => import('@/views/404')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
