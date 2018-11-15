const ParentController = require('./controllers/ParentController')
/*
const StudentController = require('/controllers/StudentController')
const AnnouncementController = require('/controllers/AnnouncementController')
const HomeworkController = require('/controllers/HomeworkController')
const AttendanceController = require('/controllers/AttendanceController')
const ScheduleController = require('/controllers/ScheduleController')
*/

module.exports = (app) => {
  // Parent Route
  app.get('/parent/index', ParentController.index)
  app.post('/parent/insert', ParentController.insert)
  app.put('/parent/update/:id', ParentController.update)
  app.delete('/parent/delete/:id', ParentController.delete)
  /*
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
  // Schedule Route
  app.get('/schedule/index', ScheduleController.index)
  app.post('/schedule/insert', ScheduleController.insert)
  app.put('/schedule/update/:id', ScheduleController.update)
  app.delete('/schedule/delete/:id', ScheduleController.delete)
  */
}
