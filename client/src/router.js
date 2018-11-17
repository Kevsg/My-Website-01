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
import subjectCRUDE from '@/components/subjectCRUDE'
import StudentWork from '@/components/StudentWork'
import AbsentStudent from '@/components/AbsentStudent'
import TeacherStudent from '@/components/TeacherStudent'
import CourseGrade from '@/components/CourseGrade'

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
      path: '/subject-crude',
      name: 'subject-crude',
      component: subjectCRUDE
    },
    {
      path: '/student-work',
      name: 'studentwork',
      component: StudentWork
    },
    {
      path: '/absent-student',
      name: 'absent-student',
      component: AbsentStudent
    },
    {
      path: '/school-activity',
      name: 'school-activity',
      component: StudentWork
    },
    {
      path: '/teacher-student',
      name: 'teacher-student',
      component: TeacherStudent
    },
    {
      path: '/course-grade',
      name: 'course-grade',
      component: CourseGrade
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
