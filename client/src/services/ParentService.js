import Api from '@/services/Api'

export default {
  insertParent (parent) {
    console.log(parent)
    return Api().post('parent/insert', parent)
  },
  deleteParent (id, parent) {
    return Api().delete('parent/delete/:id')
  },
  updateParent (id, parent) {
    return Api.post('parent/update/:id')
  }
}
