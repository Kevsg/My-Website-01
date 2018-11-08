<template>
  <div>
    <h1>{{this.name}}</h1>
    <h1>{{this.id}}</h1>
  </div>
</template>

<script>
import AboutService from '@/services/AboutService'

export default {
  data () {
    return {
      info: {}
      }
  },
  async mounted () {
    this.info = (await AboutService.index()).data
  },
  methods: {
    insert: function () {
      console.log('insert data')
    }
  }
  
}
</script>
