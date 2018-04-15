
const app = new Vue({
  data: {
    'name': 'kevin',
    show: false
  },
  el: '#appjumbotron',
  mounted () {
    console.log('Mounted')
  }
})

const app1 = new Vue({
  el: '#demo',
  data: {
    show: true
  }
})

const app2 = new Vue({
  el: '#example-1',
  data: {
    show: true
  }
})
