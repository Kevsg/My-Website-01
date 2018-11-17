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
  deleteAttendance (attendance) {
    return Api().delete(`attendance/delete/${attendance.StudentID}`, attendance)
  },
  updateAttendance (id, attendance) {
    return Api().put(`attendance/update/${id}`, attendance)
  }
}
