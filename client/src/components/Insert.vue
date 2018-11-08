<template>
  <div>
    <h1>Insert</h1>
    <v-form/>

    <v-form>

        <v-text-field
        v-model="pid"
        label="Parent ID"
        required
        ></v-text-field>

        <v-text-field
        v-model="name"
        label="Name"
        required
        ></v-text-field>

        <v-text-field
        v-model="gender"
        label="Gender"
        required
        ></v-text-field>

        <v-text-field
        v-model="tel"
        label="Teleplone"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        label="Email"
        required
        ></v-text-field>

        <v-text-field
        v-model="addr"
        label="Address"
        required
        ></v-text-field>

    </v-form>
    <v-btn primary v-on:click="insert">Add</v-btn>
  </div>
</template>

<script>
import AboutService from '@/services/AboutService'
import ParentService from '@/services/ParentService'

export default {
  data: function () {
    return {
        pid: '',
        name: '',
        
        gender: '',
        tel: '',
        
        email: '',
        addr: ''
        
      }
  },
  async mounted () {
    this.info = (await AboutService.index()).data
  },
  methods: {
    insert: function () {
      console.log('insert data')
      console.log(this.name)
      let parent = {
          pid: this.pid,
          name: this.name,
          gender: this.gender,
          tel: this.tel,
          email: this.email,
          addr: this.addr
      }
      ParentService.insertParent(parent)
    }
  }
  
}
</script>

<style scoped>

</style>
>