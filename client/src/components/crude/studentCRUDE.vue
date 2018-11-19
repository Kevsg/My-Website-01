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
      <v-toolbar-title primary>Student Table</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.StudentID" label="Student ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.ClassID" label="Class ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Year" label="Year"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.ParentID" label="Parent ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Gender" label="Gender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Address" label="Address"></v-text-field>
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
                  <v-text-field disabled v-model="editedItem.StudentID" label="Student ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.ClassID" label="Class ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Year" label="Year"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.ParentID" label="Parent ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Gender" label="Gender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Address" label="Address"></v-text-field>
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
      :items="students"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.StudentID }}</td>
        <td class="text-xs-right">{{ props.item.ClassID }}</td>
        <td class="text-xs-right">{{ props.item.Year }}</td>
        <td class="text-xs-right">{{ props.item.ParentID }}</td>
        <td class="text-xs-right">{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.Gender }}</td>
        <td class="text-xs-right">{{ props.item.Address }}</td>
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
import StudentService from '@/services/StudentService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'Student ID',
          align: 'left',
          sortable: true,
          value: 'StudentID'
        },
        { text: 'Class ID', align: 'right',value: 'ClassID' },
        { text: 'Year', align: 'right', value: 'Year' },
        { text: 'Parent ID', align: 'right', value: 'ParentID' },
        { text: 'Name', align: 'right', value: 'Name' },
        { text: 'Gender', align: 'right', value: 'Gender' },
        { text: 'Address', align: 'right', value: 'Address' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      desserts: [],students: [],
      editedIndex: -1,
      editedItem: {
        'StudentID': '',
        'ClassID' : '',
        'Year': '',
        'ParentID': '',
        'Name': '',
        'Gender': '',
        'Address': ''
      },
      defaultItem: {
        'StudentID': '',
        'ClassID' : '',
        'Year': '',
        'ParentID': '',
        'Name': '',
        'Gender': '',
        'Address': ''
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
        this.students = [
          {
            'StudentID': 'A',
            'ClassID' : 'A',
            'Year': 'A',
            'ParentID': 'A',
            'Name': 'A',
            'Gender': 'A',
            'Address': 'A'
          },
          {
            'StudentID': 'B',
            'ClassID' : 'B',
            'Year': 'B',
            'ParentID': 'B',
            'Name': 'B',
            'Gender': 'B',
            'Address': 'B'
          }
        ]
      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        StudentService.deleteStudent(item.StudentID).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.students.indexOf(item)
            this.students.splice(index, 1)
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
        let student = {        
            StudentID: this.editedItem.StudentID,
            ClassID: this.editedItem.ClassID,
            Year: this.editedItem.Year,
            ParentID: this.editedItem.ParentID,
            Name: this.editedItem.Name,
            Gender: this.editedItem.Gender,
            Address: this.editedItem.Address}
        StudentService.insertStudent(student).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to insert student info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.students[this.editedIndex], this.editedItem)
          } else {
            this.students.push(this.editedItem)
          }
        }
        })
        
        this.closeI()
        
      },
      //update
      saveU () {
        let student = {        
            StudentID: this.editedItem.StudentID,
            ClassID: this.editedItem.ClassID,
            Year: this.editedItem.Year,
            ParentID: this.editedItem.ParentID,
            Name: this.editedItem.Name,
            Gender: this.editedItem.Gender,
            Address: this.editedItem.Address}

        StudentService.updateStudent(student.StudentID, student).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to update student info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.students[this.editedIndex], this.editedItem)
          } else {
            this.students.push(this.editedItem)
          }
        }
        })
        this.closeU()
      },
      async getData () {
        var x = await StudentService.index()
        this.students = x.data 
      }
    }

  }
</script>