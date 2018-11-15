import Api from '@/services/Api'

export default {
  index() {
    return Api().get('homework/index')
  },
  insertHomework (homework) {
    // eslint-disable-next-line no-console
    console.log(homework)
    return Api().post('homework/insert', homework)
  },
  deleteHomework (id) {
    return Api().delete(`homework/delete/${id}`)
  },
  updateHomework (id, homework) {
    return Api().put(`homework/update/${id}`, homework)
  }
}
