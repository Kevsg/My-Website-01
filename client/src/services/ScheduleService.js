import Api from '@/services/Api'

export default {
  index() {
    return Api().get('schedule/index')
  },
  insertSchedule (schedule) {
    // eslint-disable-next-line no-console
    console.log(schedule)
    return Api().post('schedule/insert', schedule)
  },
  deleteSchedule (id) {
    return Api().delete(`schedule/delete/${id}`)
  },
  updateSchedule (id, schedule) {
    return Api().put(`schedule/update/${id}`, schedule)
  }
}
