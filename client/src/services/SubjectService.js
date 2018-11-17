import Api from '@/services/Api'

export default {
  index() {
    return Api().get('subject/index')
  },
  insertSubject(subject) {
    // eslint-disable-next-line no-console
    console.log(subject)
    return Api().post('subject/insert', subject)
  },
  deleteSubject (id) {
    return Api().delete(`subject/delete/${id}`)
  },
  updateSubject (id, subject) {
    return Api().put(`subject/update/${id}`, subject)
  }
}
