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
        v-model="ClassInput"
        label="Class"
        required
        ></v-text-field>
        <v-text-field
        v-model="DateInput"
        label="Date"
        required
        ></v-text-field>
        <div>
            <v-btn color="primary" class="b" v-on:click="getData">Search</v-btn>
        </div>
    </v-form>

    <v-toolbar flat color="white">
      <v-toolbar-title primary>Absent Student Table</v-toolbar-title>
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
        <td class="text-xs-right">{{ props.item.Class }}</td>
        <td class="text-xs-right">{{ props.item.Type }}</td>
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
          text: 'Student name',
          align: 'left',
          sortable: true,
          value: 'Name'
        },
        { text: 'Class', align: 'right',value: 'Class' },
        { text: 'Type', align: 'right', value: 'Type' },
      ],
      parents: [],
      editedIndex: -1,
      defaultItem: {
        'Name' : '',
        'Class': '',
        'Type': ''
      },
      ClassInput: '',
      DateInput: '',
      valid: true
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
            'Name' : 'X',
            'Class': 'Y',
            'Type': 'Z'
          },
          {
            'Name' : 'K',
            'Class': 'A',
            'Type': 'B'
          }
        ]
      },
      async getData () {
        let classID = this.ClassInput
        let day = this.DateInput
        console.log(classID,day)
        var x = await QueryService.absentStudent(classID,day)
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
