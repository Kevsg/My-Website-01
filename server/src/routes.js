const ParentController = require('./controllers/crude/ParentController')
const StudentController = require('./controllers/crude/StudentController')
const AnnouncementController = require('./controllers/crude/AnnouncementController')
const HomeworkController = require('./controllers/crude/HomeworkController')
const AttendanceController = require('./controllers/crude/AttendanceController')
const SubjectController = require('./controllers/crude/SubjectController')
const QueryController = require('./controllers/QueryController')
const TeacherController = require('./controllers/functional/TeacherController')
const ParentHController = require('./controllers/functional/ParentHController')

module.exports = (app) => {
  // Parent Route
  app.get('/parent/index', ParentController.index)
  app.post('/parent/insert', ParentController.insert)
  app.put('/parent/update/:id', ParentController.update)
  app.delete('/parent/delete/:id', ParentController.delete)
  // Student Route
  app.get('/student/index', StudentController.index)
  app.post('/student/insert', StudentController.insert)
  app.put('/student/update/:id', StudentController.update)
  app.delete('/student/delete/:id', StudentController.delete)
  // Announcement Route
  app.get('/announcement/index', AnnouncementController.index)
  app.post('/announcement/insert', AnnouncementController.insert)
  app.put('/announcement/update/:id', AnnouncementController.update)
  app.delete('/announcement/delete/:id', AnnouncementController.delete)
  // Homework Route
  app.get('/homework/index', HomeworkController.index)
  app.post('/homework/insert', HomeworkController.insert)
  app.put('/homework/update/:id', HomeworkController.update)
  app.delete('/homework/delete/:id', HomeworkController.delete)
  // Attendance Route
  app.get('/attendance/index', AttendanceController.index)
  app.post('/attendance/insert', AttendanceController.insert)
  app.put('/attendance/update/:id', AttendanceController.update)
  app.delete('/attendance/delete/:id', AttendanceController.delete)
  // Subject Route
  app.get('/subject/index', SubjectController.index)
  app.post('/subject/insert', SubjectController.insert)
  app.put('/subject/update/:id', SubjectController.update)
  app.delete('/subject/delete/:id', SubjectController.delete)
  // Query Route
  app.get('/student-work/:sid', QueryController.studentWork)
  app.get('/absent-student/:classID&:day', QueryController.absentStudent)
  app.get('/school-activity', QueryController.schoolActivity)
  app.get('/teacher-student/:teacherName', QueryController.teacherStudent)
  app.get('/course-grade/:sID&:year', QueryController.courseGrade)
  // Teacher Route
  app.get('/teacher-assignment/:tid', TeacherController.findAssignments)
  app.get('/teacher-assignment/:tid/subjects', TeacherController.getTeachingSubjects)
  app.get('/teacher-assignment/:tid/classes', TeacherController.getTeachingClasses)
  app.post('/teacher-assignment/:tid/insert', TeacherController.createAssignment)
  app.put('/teacher-assignment/update/:aid', TeacherController.editAssignment)
  app.delete('/teacher-assignment/delete/:aid', TeacherController.deleteAssignment)
  app.get('/teacher-assignment/:classid/class-year', TeacherController.getClassYear)
  // Parent Assignment
  app.get('/parent-assignment/:pid/index', ParentHController.index)
  app.get(`/parent-assignment/:sid/:wid`, ParentHController.isThisTaskCheck)
}
