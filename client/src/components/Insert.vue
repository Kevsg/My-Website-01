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
        v-model="telephone"
        label="Telephone"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        label="Email"
        required
        ></v-text-field>

        <v-text-field
        v-model="address"
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
        telephone: '',
        email: '',
        address: ''
      }
  },
  async mounted () {
    this.info = (await AboutService.index()).data
  },
  methods: {
    insert: function () {
      // eslint-disable-next-line
      console.log('insert data')
      // eslint-disable-next-line
      console.log(this.name)
      let parent = {
          pid: this.pid,
          name: this.name,
          gender: this.gender,
          telephone: this.telephone,
          email: this.email,
          address: this.address
      }
      ParentService.insertParent(parent)
    }
  }
  
}
</script>

<style scoped>

</style>
>