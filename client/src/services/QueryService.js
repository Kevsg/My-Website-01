import Api from '@/services/Api'

export default {
    studentWork(studentID) {
        return Api().get('student-work',studentID)
    },
    absentStudent(classID,day) {
        return Api().get('absent-student',classID,day)
    },
    schoolActivity(day,level) {
        return Api().get('school-activity',day,level)
    },
    teacherStudent(teacherName) {
        return Api().get('teacher-student',teacherName)
    },
    courseGrade(subjectID,year) {
        return Api().get('course-grade',subjectID,year)
    }
}
