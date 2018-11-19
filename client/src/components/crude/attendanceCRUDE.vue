<!-- FIND WAYS TO HANDLE DATE !-->

<template>
  <div>
     <v-alert
      v-model="alert"
      dismissible
      type="error"
    >
      {{this.errorMessage}}
    </v-alert>
    <v-toolbar flat color="white">
      <v-toolbar-title primary>Attendance Table</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>

     

      <v-dialog v-model="dialogI" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Date" label="Date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.StudentID" label="Student ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Type" label="Type"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="closeI">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="saveI">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      

      <v-dialog v-model="dialogU" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field disabled v-model="editedItem.Date" label="Date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field disabled v-model="editedItem.StudentID" label="Student ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Type" label="Type"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="closeU">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="saveU">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="attendances"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.Date }}</td>
        <td class="text-xs-right">{{ props.item.StudentID }}</td>
        <td class="text-xs-right">{{ props.item.Type }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import AttendanceService from '@/services/AttendanceService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'Date',
          align: 'left',
          sortable: true,
          value: 'Date'
        },
        { text: 'Student ID', align: 'right',value: 'StudentID' },
        { text: 'Type', align: 'right', value: 'Type' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      desserts: [],attendances: [],
      editedIndex: -1,
      editedItem: {
        'Date': '',
        'StudentID' : '',
        'Type': ''
      },
      defaultItem: {
        'Date': '',
        'StudentID' : '',
        'Type': ''
      }
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

    async mounted() {
      this.getData()
    },  

    methods: {
      initialize () {
        this.attendances = [
          {
            'Date': 'A',
            'StudentID' : 'A',
            'Type': 'A'
          },
          {
            'Date': 'B',
            'StudentID' : 'B',
            'Type': 'B'
          }
        ]
      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.attendances.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        let attendance = {
          Date: item.Date,
          StudentID: item.StudentID
        }
        AttendanceService.deleteAttendance(attendance).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.attendances.indexOf(item)
            this.attendances.splice(index, 1)
          }

        })
      },
      //close popup
      closeI () {
        this.dialogI = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      closeU () {
        this.dialogU = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      //insert
      async saveI () {
        let attendance = {    
            Date: this.editedItem.Date,    
            StudentID: this.editedItem.StudentID,
            Type: this.editedItem.Type
        }
        AttendanceService.insertAttendance(attendance).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to insert attendance info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.attendances[this.editedIndex], this.editedItem)
          } else {
            this.attendances.push(this.editedItem)
          }
        }
        })
        
        this.closeI()
        
      },
      //update
      saveU () {
        let attendance = {        
            Date: this.editedItem.Date,    
            StudentID: this.editedItem.StudentID,
            Type: this.editedItem.Type
        }

        AttendanceService.updateAttendance(attendance.StudentID, attendance).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to update attendance info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.attendances[this.editedIndex], this.editedItem)
          } else {
            this.attendances.push(this.editedItem)
          }
        }
        })
        this.closeU()
      },
      async getData () {
        var x = await AttendanceService.index()
        this.attendances = x.data 
      }
    }

  }
</script>