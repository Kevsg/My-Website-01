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
        v-model="subjectInput"
        label="Subject ID"
        required
        ></v-text-field>
        <v-text-field
        v-model="yearInput"
        label="Year"
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
        <td>{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.StudentID }}</td>
        <td class="text-xs-right">{{ props.item.Grade}}</td>
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
          text: 'Student Name',
          align: 'left',
          sortable: true,
          value: 'Name'
        },
        { text: 'Student ID', align: 'right',value: 'StudentID' },
        { text: 'Grade', align: 'right', value: 'Grade' }
      ],
      parents: [],
      editedIndex: -1,
      defaultItem: {
        'Name': '',
        'StudentID' : '',
        'Grade': ''
      },
      ClassInput: '',
      DateInput: '',
      valid: true,
      TeacherNameInput: '',
      subjectInput: '',
      yearInput: ''
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
            'Name': 'Y',
            'StudentID' : '05',
            'Grade': '4.00'
          },
          {
            'Name': 'Q',
            'StudentID' : '06',
            'Grade': '9.0'
          }
        ]
      },
      async getData () {
        let sI = this.subjectInput
        let y = this.yearInput
        var x = await QueryService.courseGrade(sI,y)
        this.parents = x.data 
      }
    }

  }
</script>

<style>
.inputform {
    padding: 50px 100px;
}
</style>
