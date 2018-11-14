<template>
  <div class="Update">
    <h1>Update</h1>
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
    <v-btn primary v-on:click="update">Add</v-btn>
    <ResultList></ResultList>
  </div>
</template>

<script>
import ParentService from '@/services/ParentService'
import ResultList from '@/components/ResultList'

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
  components: {
    'ResultList': ResultList
  },
  methods: {
    update: function () {
      // eslint-disable-next-line
      console.log('update data')
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
      ParentService.updateParent(parent.pid,parent).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
          alert('Error trying to update parent info.')
        }
      })
    }
  }
  
}
</script>

<style scoped>
.Insert {
  padding: 50px 100px;
}
</style>
