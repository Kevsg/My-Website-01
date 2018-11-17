import Api from '@/services/Api'

export default {
    studentWork(sid) {
        return Api().get(`student-work/${sid}`,sid)
    },
    absentStudent(classID,day) {
        return Api().get(`absent-student/${classID}&${day}`,[classID,day])
    },
    schoolActivity(day,level) {
        return Api().get('school-activity',day,level)
    },
    teacherStudent(teacherName) {
        return Api().get(`teacher-student/${teacherName}`,teacherName)
    },
    courseGrade(subjectID,year) {
        return Api().get(`course-grade/${subjectID}&${year}`,subjectID,year)
    }
}
