import Api from '@/services/Api'

export default {
  index() {
    return Api().get('announcement/index')
  },
  insertAnnouncement (announcement) {
    // eslint-disable-next-line no-console
    console.log(announcement)
    return Api().post('announcement/insert', announcement)
  },
  deleteAnnouncement (id) {
    return Api().delete(`announcement/delete/${id}`)
  },
  updateAnnouncement (id, announcement) {
    return Api().put(`announcement/update/${id}`, announcement)
  }
}
