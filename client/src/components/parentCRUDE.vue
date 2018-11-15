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
      <v-toolbar-title primary>Parent Table</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.ParentID" label="Parent ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Gender" label="Gender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Telephone" label="Telephone"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Email" label="Email"></v-text-field>
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
                  <v-text-field disabled v-model="editedItem.ParentID" label="Parent ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Gender" label="Gender"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Telephone" label="Telephone"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Email" label="Email"></v-text-field>
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
      :items="parents"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.ParentID }}</td>
        <td class="text-xs-right">{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.Gender }}</td>
        <td class="text-xs-right">{{ props.item.Telephone }}</td>
        <td class="text-xs-right">{{ props.item.Email }}</td>
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
import ParentService from '@/services/ParentService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'Parent ID',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Name', align: 'right',value: 'Name' },
        { text: 'Gender', align: 'right', value: 'Gender' },
        { text: 'Telephone', align: 'right', value: 'Telephone' },
        { text: 'Email', align: 'right', value: 'Email' },
        { text: 'Address', align: 'right', value: 'Address' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      desserts: [],parents: [],
      editedIndex: -1,
      editedItem: {
        'ParentID' : '',
        'Name': '',
        'Gender': '',
        'Telephone': '',
        'Email': '',
        'Address': ''
      },
      defaultItem: {
        'ParentID' : '',
        'Name': '',
        'Gender': '',
        'Telephone': '',
        'Email': '',
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
        this.parents = [
          {
            ParentID: 'Frozen Yogurt',
            Name: 159,
            Gender: 6.0,
            Telephone: 24,
            Email: 4.0,
            Address: 'Albama'
          },
          {
            ParentID: 'Assanee WongPreeChaikul',
            Name: 188,
            Gender: 79,
            Telephone: 22,
            Email: 5.0,
            Address: 'Bangkok'
          }
        ]
      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.parents.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        ParentService.deleteParent(item.ParentID).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.parents.indexOf(item)
            this.parents.splice(index, 1)
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
        let parent = {        
            ParentID: this.editedItem.ParentID,
            Name: this.editedItem.Name,
            Gender: this.editedItem.Gender,
            Telephone: this.editedItem.Telephone,
            Email: this.editedItem.Email,
            Address: this.editedItem.Address}
        ParentService.insertParent(parent).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            alert('Error trying to insert parent info.')
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.parents[this.editedIndex], this.editedItem)
          } else {
            this.parents.push(this.editedItem)
          }
        }
        })
        
        this.closeI()
        
      },
      //update
      saveU () {
        let parent = {        
            ParentID: this.editedItem.ParentID,
            Name: this.editedItem.Name,
            Gender: this.editedItem.Gender,
            Telephone: this.editedItem.Telephone,
            Email: this.editedItem.Email,
            Address: this.editedItem.Address}

        ParentService.updateParent(parent.id, parent).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to update parent info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.parents[this.editedIndex], this.editedItem)
          } else {
            this.parents.push(this.editedItem)
          }
        }
        })
        

        if (this.editedIndex > -1) {
          Object.assign(this.parents[this.editedIndex], this.editedItem)
        } else {
          this.parents.push(this.editedItem)
        }
        this.closeU()
      },
      async getData () {
        var x = await ParentService.index()
        this.parents = x.data 
      }
    }

  }
</script>