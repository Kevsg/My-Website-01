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
      <v-toolbar-title primary>Homework Table</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.WorkID" label="Work ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.SubjectID" label="Subject ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Full_Score" label="Full Score"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
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
                  <v-text-field disabled v-model="editedItem.WorkID" label="Work ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.SubjectID" label="Subject ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Full_Score" label="Full Score"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
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
import HomeworkService from '@/services/HomeworkService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
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
        { text: 'Type', align: 'right', value: 'Type' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
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
      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.homeworks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        HomeworkService.deleteHomework(item.WorkID).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.homeworks.indexOf(item)
            this.homeworks.splice(index, 1)
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
        let homework = {        
            WorkID: this.editedItem.WorkID,
            SubjectID: this.editedItem.SubjectID,
            Name: this.editedItem.Name,
            Full_Score: this.editedItem.Full_Score,
            Description: this.editedItem.Description,
            Type: this.editedItem.Type
        }
        HomeworkService.insertHomework(homework).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to insert homework info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.homeworks[this.editedIndex], this.editedItem)
          } else {
            this.homeworks.push(this.editedItem)
          }
        }
        })
        this.closeI()
        
      },
      //update
      saveU () {
        let homework = {        
            WorkID: this.editedItem.WorkID,
            SubjectID: this.editedItem.SubjectID,
            Name: this.editedItem.Name,
            Full_Score: this.editedItem.Full_Score,
            Description: this.editedItem.Description,
            Type: this.editedItem.Type
        }

        HomeworkService.updateHomework(homework.StudentID, homework).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to update homework info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.homeworks[this.editedIndex], this.editedItem)
          } else {
            this.homeworks.push(this.editedItem)
          }
        }
        })
        

        if (this.editedIndex > -1) {
          Object.assign(this.homeworks[this.editedIndex], this.editedItem)
        } else {
          this.homeworks.push(this.editedItem)
        }
        this.closeU()
      },
      async getData () {
        var x = await HomeworkService.index()
        this.homeworks = x.data 
      }
    }

  }
</script>