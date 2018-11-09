import Api from '@/services/Api'

export default {
  insertParent (parent) {
    // eslint-disable-next-line no-console
    console.log(parent)
    return Api().post('parent/insert', parent)
  },
  deleteParent (id) {
    return Api().delete(`parent/delete/${id}`)
  },
  updateParent (id, parent) {
    return Api.post(`parent/update/${id}`,parent)
  }
}
