import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/views/Top';
import About from '@/views/About';
import PostIndex from '@/views/News/Index';
import PostDetail from '@/views/News/Detail';
import ConcertIndex from '@/views/Concerts/Index';
import ConcertDetail from '@/views/Concerts/Detail';
import Contact from '@/views/Contact';
import Instructor from '@/views/Instructor';

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
      path: '/posts/',
      component: PostIndex
    },
    {
      path: '/posts/:id',
      component: PostDetail
    }
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
      component: Instructor
    },
    {
      path: '/contact/',
      component: Contact
    }
]
});
