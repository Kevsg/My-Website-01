import Api from '@/services/Api'

export default {
  getAssignment(tid) {
    return Api().get(`teacher-assignment/${tid}`,tid)
  },
  createAssignment(tid, assignment) {
    return Api().post(`teacher-assignment/${tid}/insert`, {tid, assignment})
  },
  deleteAssignment (aid) {
    return Api().delete(`teacher-assignment/delete/${aid}`,aid)
  },
  updateAssigment (aid, assignment) {
    return Api().put(`subject/update/${aid}`, assignment)
  },
  getTeachingSubjects(tid) {
    return Api().get(`teacher-assignment/${tid}/subjects`)
  },
  getTeachingClasses(tid) {
    return Api().get(`teacher-assignment/${tid}/classes`)
  },
  getClassYear(cid) {
    return Api().get(`teacher-assignment/${cid}/class-year`)
  }
}
