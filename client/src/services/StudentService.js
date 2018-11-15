import Api from '@/services/Api'

export default {
  index() {
    return Api().get('student/index')
  },
  insertStudent (student) {
    // eslint-disable-next-line no-console
    console.log(student)
    return Api().post('student/insert', student)
  },
  deleteStudent (id) {
    return Api().delete(`student/delete/${id}`)
  },
  updateStudent (id, student) {
    return Api().put(`student/update/${id}`, student)
  }
}
