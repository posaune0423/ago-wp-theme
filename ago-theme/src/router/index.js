import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/views/Top';
import About from '@/views/About';
import NewsIndex from '@/views/News/Index';
import NewsDetail from '@/views/News/Detail';
import ConcertIndex from '@/views/Concerts/Index';
import ConcertDetail from '@/views/Concerts/Detail';
import Contact from '@/views/Contact';
import InstructorsIndex from '@/views/Instructors/Index';
import InstructorsDetail from '@/views/Instructors/Detail';

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
      component: NewsIndex
    },
    {
      path: '/news/:id',
      component: NewsDetail
    },
    {
      path: '/concerts/',
      component: ConcertIndex
    },
    {
      path: '/concerts/:id',
      component: ConcertDetail
    },
    {
      path: '/instructors/',
      component: InstructorsIndex
    },
    {
      path: '/instructors/:id',
      component: InstructorsDetail
    },
    {
      path: '/contact/',
      component: Contact
    }
  ]
});
