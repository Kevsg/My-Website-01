<template>
  <div>
     <v-alert
      v-model="alert"
      dismissible
      type="error"
    >
      {{this.errorMessage}}
    </v-alert>

    <v-form v-model="valid" class="inputform">
        <v-text-field
        v-model="TeacherNameInput"
        label="Teacher Name"
        required
        ></v-text-field>
        <div>
            <v-btn color="primary" class="b" v-on:click="getData">Search</v-btn>
        </div>
    </v-form>

    <v-toolbar flat color="white">
      <v-toolbar-title primary>Teacher Student</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="parents"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.StudentID }}</td>
        <td class="text-xs-right">{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.ClassID }}</td>
        <td class="text-xs-right">{{ props.item.Year }}</td>
      </template>
      <template slot="no-data">
        <h1>Nothing Match your query</h1>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import QueryService from '@/services/QueryService.js'

  export default {
    data: () => ({
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'Student ID',
          align: 'left',
          sortable: true,
          value: 'StudentID'
        },
        { text: 'Student Name', align: 'right',value: 'Name' },
        { text: 'Class ID', align: 'right', value: 'ClassID' },
        { text: 'Year', align: 'right', value: 'Year' }
      ],
      parents: [],
      editedIndex: -1,
      defaultItem: {
        'StudentID': '',
        'Name' : '',
        'ClassID': '',
        'Year': ''
      },
      ClassInput: '',
      DateInput: '',
      valid: true,
      TeacherNameInput: ''
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.parents = [
          {
            'StudentID': '01',
            'Name' : 'Leo',
            'ClassID': '03',
            'Year': '2018'
          },
          {
            'StudentID': '02',
            'Name' : 'Keo',
            'ClassID': '04',
            'Year': '2018'
          }
        ]
      },
      async getData () {
        let TName = this.TeacherNameInput
        var x = await QueryService.teacherStudent(TName)
        this.parents = x.data 
      }
    }

  }
</script>

<style>
.inputform {
    padding: 50px 100px;
}

.b {
    margin-left:80vw;
}
</style>
