<template>
  <div>
    <h1>About Page</h1>
    {{this.info}}
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
}
</script>
