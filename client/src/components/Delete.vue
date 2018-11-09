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
      console.log('Delete data')
      //delete Parent
    }
  }
  
}
</script>
