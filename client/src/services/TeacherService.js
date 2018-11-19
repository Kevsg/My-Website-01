import Api from '@/services/Api'

export default {
  getAssignment(tid) {
    return Api().get(`teacher-assignment/${tid}`,tid)
  },
  createAssignment(tid, assignment) {
    return Api().post(`teacher-assignment/${tid}/insert`, tid,assignment)
  },
  deleteAssigment (aid) {
    return Api().delete(`subject/delete/${aid}`)
  },
  updateAssigment (aid, assignment) {
    return Api().put(`subject/update/${aid}`, assignment)
  },
  getTeachingSubjects(tid) {
    return Api().get(`teacher-assignment/${tid}/subjects`)
  },
  getTeachingClasses(tid) {
    return Api().get(`teacher-assignment/${tid}/classes`)
  }
}
