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
        v-model="studentIDinput"
        label="Student ID"
        required
        ></v-text-field>
        <div>
            <v-btn color="primary" class="b" v-on:click="getData">Search</v-btn>
        </div>
    </v-form>

    <v-toolbar flat color="white">
      <v-toolbar-title primary>Student's Homework</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="homeworks"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.WorkID }}</td>
        <td class="text-xs-right">{{ props.item.SubjectID }}</td>
        <td class="text-xs-right">{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.Full_Score }}</td>
        <td class="text-xs-right">{{ props.item.Description }}</td>
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
import HomworkService from '@/services/HomeworkService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      valid: '',
      headers: [
        {
          text: 'Work ID',
          align: 'left',
          sortable: true,
          value: 'WorkID'
        },
        { text: 'Subject ID', align: 'right',value: 'SubjectID' },
        { text: 'Name', align: 'right', value: 'Name' },
        { text: 'Full Score', align: 'right', value: 'Full_Score' },
        { text: 'Description', align: 'right', value: 'Description' },
        { text: 'Type', align: 'right', value: 'Type' }
      ],
      desserts: [],homeworks: [],
      editedIndex: -1,
      editedItem: {
        'WorkID': '',
        'SubjectID': '',
        'Name' : '',
        'Full_Score': '',
        'Description': '',
        'Type': ''
      },
      defaultItem: {
        'WorkID': '',
        'SubjectID': '',
        'Name' : '',
        'Full_Score': '',
        'Description': '',
        'Type': ''
      },
      studentIDinput: ''
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
        this.homeworks = [
          {
            'WorkID': 'A',
            'SubjectID': 'A',
            'Name' : 'A',
            'Full_Score': 'A',
            'Description': 'A',
            'Type': 'A'
          },
          {
            'WorkID': 'B',
            'SubjectID': 'B',
            'Name' : 'B',
            'Full_Score': 'B',
            'Description': 'B',
            'Type': 'B'
          }
        ]
      this.studentIDinput = ''  
      },
      async queryData () {

      },
      async getData () {
        // change service add student ID
        let sid = this.studentIDinput
         // eslint-disable-next-line
        console.log(sid)
        var x = await QueryService.studentWork(sid)
        console.log(x)
        if(x.data == 'Errors') {
          console.log('Errors')
          this.alert = true
          this.errorMessage = `Errors trying to get student's work`
        }
        this.homeworks = x.data 
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
