import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import FirstRoute from '@/components/test/FirstRoute'
import FirstRouteChild from '@/components/test/FirstRouteChild'
import AnimationShowcase from '@/components/test/AnimationShowcase'
import About from '@/components/test/About'
import Contact from '@/components/test/Contact'
import Insert from '@/components/test/Insert'
import Delete from '@/components/test/Delete'
import Update from '@/components/test/Update'
import parentCRUDE from '@/components/crude/parentCRUDE'
import studentCRUDE from '@/components/crude/studentCRUDE'
import announcementCRUDE from '@/components/crude/announcementCRUDE'
import homeworkCRUDE from '@/components/crude/homeworkCRUDE'
import attendanceCRUDE from '@/components/crude/attendanceCRUDE'
import subjectCRUDE from '@/components/crude/subjectCRUDE'
import StudentWork from '@/components/query/StudentWork'
import AbsentStudent from '@/components/query/AbsentStudent'
import TeacherStudent from '@/components/query/TeacherStudent'
import CourseGrade from '@/components/query/CourseGrade'
import GetTeacherID from '@/components/GetTeacherID'
import TeacherAssignmentID from '@/components/TeacherAssignmentID'
import NewAssignmentPage from '@/components/NewAssignmentPage'
import TeacherAttendanceID from '@/components/TeacherAttendanceID'
import ParentAssignmentID from '@/components/ParentAssignmentID'

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
      path: '/assignment',
      name: 'assignment',
      component: GetTeacherID
    },
    {
      path: '/teacher-assignment/:id',
      name: 'teacher-assignment-id',
      component: TeacherAssignmentID
    },
    {
      path: '/teacher-assignment/:id/create',
      name: 'teacher-assignment-id-create',
      component: NewAssignmentPage
    },
    {
      path: '/teacher-attendance',
      name: 'teacher-attendance',
      component: GetTeacherID
    },
    {
      path: '/teacher-attendance/:id',
      name: 'teacher-attendancet-id',
      component: TeacherAttendanceID
    },
    {
      path: '/parent-assignment/:id',
      name: 'parent-assignment-id',
      component: ParentAssignmentID 
    }
  ]
})
