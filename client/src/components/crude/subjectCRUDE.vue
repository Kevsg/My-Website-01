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
      <v-toolbar-title primary>Subject Table</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.SubjectID" label="Subject ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Category" label="Category"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Credit" label="Credit"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
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
                  <v-text-field disabled v-model="editedItem.SubjectID" label="Subject ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Category" label="Category"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Credit" label="Description"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
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
      :items="subjects"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.SubjectID }}</td>
        <td class="text-xs-right">{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.Category }}</td>
        <td class="text-xs-right">{{ props.item.Credit }}</td>
        <td class="text-xs-right">{{ props.item.Description }}</td>
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
import SubjectService from '@/services/SubjectService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'Subject ID',
          align: 'left',
          sortable: true,
          value: 'SubjectID'
        },
        { text: 'Name', align: 'right',value: 'Name' },
        { text: 'Category', align: 'right', value: 'Category' },
        { text: 'Credit', align: 'right', value: 'Credit' },
        { text: 'Description', align: 'right', value: 'Description' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      desserts: [],subjects: [],
      editedIndex: -1,
      editedItem: {
        'SubjectID': '',
        'Name' : '',
        'Category': '',
        'Credit': '',
        'Description': ''
      },
      defaultItem: {
        'SubjectID': '',
        'Name' : '',
        'Category': '',
        'Credit': '',
        'Description': ''
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
        this.subjects = [
          {
          'SubjectID': 'S',
          'Name' : 'S',
          'Category': 'S',
          'Credit': 'S',
          'Description': 'S'
          },
          {
          'SubjectID': 'W',
          'Name' : 'W',
          'Category': 'W',
          'Credit': 'W',
          'Description': 'W'
          }
        ]
      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.subjects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        SubjectService.deleteSubject(item.SubjectID).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.subjects.indexOf(item)
            this.subjects.splice(index, 1)
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
        let subject = {        
            SubjectID: this.editedItem.SubjectID,
            Name: this.editedItem.Name,
            Category: this.editedItem.Category,
            Credit: this.editedItem.Credit,
            Description: this.editedItem.Description
        }
        SubjectService.insertSubject(subject).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to insert subject info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.subjects[this.editedIndex], this.editedItem)
          } else {
            this.subjects.push(this.editedItem)
          }
        }
        })
        
        this.closeI()
        
      },
      //update
      saveU () {
        let subject = {        
            SubjectID: this.editedItem.SubjectID,
            Name: this.editedItem.Name,
            Category: this.editedItem.Category,
            Credit: this.editedItem.Credit,
            Description: this.editedItem.Description
        }
        SubjectService.updateSubject(subject.SubjectID, subject).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to update subject info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.subjects[this.editedIndex], this.editedItem)
          } else {
            this.subjects.push(this.editedItem)
          }
        }
        })
        this.closeU()
      },
      async getData () {
        var x = await SubjectService.index()
        this.subjects = x.data 
      }
    }

  }
</script>