import Api from '@/services/Api'

export default {
  index() {
    return Api().get('attendance/index')
  },
  insertAttendance (attendance) {
    // eslint-disable-next-line no-console
    console.log(attendance)
    return Api().post('attendance/insert', attendance)
  },
  deleteAttendance (id) {
    return Api().delete(`attendance/delete/${id}`)
  },
  updateAttendance (id, attendance) {
    return Api().put(`attendance/update/${id}`, attendance)
  }
}
