<template>
  <div>
    <h1>Delete</h1>
    <v-text-field
        v-model="pid"
        label="Input the ID of parent you want to delete"
        required
        ></v-text-field>
    <v-btn v-on:click="this.delete">-</v-btn>
  </div>
</template>

<script>
import ParentService from '@/services/ParentService'

export default {
  data () {
    return {
        //State go here
      }
  },
  async mounted () {
    // do something when mounted
  },
  methods: {
    delete: function () {
      // eslint-disable-next-line
      console.log('Delete data id of : ',this.pid)
      //delete Parent
      ParentService.deleteParent(this.pid).then((res) => {
        if(res.data == 'Error') {
          //do something to handle error
          alert('Error trying to delete parent info.')
        }
      })

    }
  }
  
}
</script>
