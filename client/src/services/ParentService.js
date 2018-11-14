import Api from '@/services/Api'

export default {
  index() {
    return Api().get('parent/index')
  },
  insertParent (parent) {
    // eslint-disable-next-line no-console
    console.log(parent)
    return Api().post('parent/insert', parent)
  },
  deleteParent (id) {
    return Api().delete(`parent/delete/${id}`)
  },
  updateParent (id, parent) {
    return Api().put(`parent/update/${id}`, parent)
  }
}
