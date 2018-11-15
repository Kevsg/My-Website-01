import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import FirstRoute from '@/components/FirstRoute'
import FirstRouteChild from '@/components/FirstRouteChild'
import AnimationShowcase from '@/components/AnimationShowcase'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Insert from '@/components/Insert'
import Delete from '@/components/Delete'
import Update from '@/components/Update'
import parentCRUDE from '@/components/parentCRUDE'
import studentCRUDE from '@/components/studentCRUDE'
import announcementCRUDE from '@/components/announcementCRUDE'
import homeworkCRUDE from '@/components/homeworkCRUDE'
import attendanceCRUDE from '@/components/attendanceCRUDE'
import scheduleCRUDE from '@/components/scheduleCRUDE'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute,
      children: [
        {
          path: 'child',
          component: FirstRouteChild
        }
      ]
    },
    {
      path: '/animationshowcase/',
      name: 'AnimationShowcase',
      component: AnimationShowcase
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/insert',
      name: 'Insert',
      component: Insert
    },
    {
      path: '/delete',
      name: 'Delete',
      component: Delete
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/parent-crude',
      name: 'parent-crude',
      component: parentCRUDE
    },
    {
      path: '/student-crude',
      name: 'student-crude',
      component: studentCRUDE
    },
    {
      path: '/announcement-crude',
      name: 'announcement-crude',
      component: announcementCRUDE
    },
    {
      path: '/homework-crude',
      name: 'homework-crude',
      component: homeworkCRUDE
    },
    {
      path: '/attendance-crude',
      name: 'attendace-crude',
      component: attendanceCRUDE
    },
    {
      path: '/schedule-crude',
      name: 'schedule-crude',
      component: scheduleCRUDE
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
