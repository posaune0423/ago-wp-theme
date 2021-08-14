import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/views/Top';
import About from '@/views/About';
import Contact from '@/views/Contact';
import Thanks from '@/views/Thanks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/about/',
      component: About
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
      component: Contact
    },
    {
      path: '/thanks/',
      component: Thanks
    }
  ]
});
