import Api from '@/services/Api'

export default {
  index(pid) {
    return Api().get(`parent-assignment/${pid}/index`, pid)
  },
  isThisTaskCheck(sid,wid) {
    return Api().get(`parent-assignment/${sid}/${wid}`,{sid,wid})
  }
}
