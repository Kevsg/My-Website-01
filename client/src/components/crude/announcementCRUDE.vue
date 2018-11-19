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
      <v-toolbar-title primary>Announcement Table</v-toolbar-title>
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
                  <v-text-field v-model="editedItem.ActivityID" label="Activity ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Start_DateTime" label="Start Time"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.End_DateTime" label="End Time"></v-text-field>
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
                  <v-text-field disabled v-model="editedItem.ActivityID" label="Activity ID"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Start_DateTime" label="Start Time"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.End_DateTime" label="End Time"></v-text-field>
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
      :items="announcements"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.ActivityID }}</td>
        <td class="text-xs-right">{{ props.item.Name }}</td>
        <td class="text-xs-right">{{ props.item.Description }}</td>
        <td class="text-xs-right">{{ props.item.Start_DateTime }}</td>
        <td class="text-xs-right">{{ props.item.End_DateTime }}</td>
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
import AnnouncementService from '@/services/AnnouncementService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'Activity ID',
          align: 'left',
          sortable: true,
          value: 'ActivityID'
        },
        { text: 'Name', align: 'right',value: 'Name' },
        { text: 'Description', align: 'right', value: 'Description' },
        { text: 'Start_DateTime', align: 'right', value: 'Start_DateTime' },
        { text: 'End_DateTime', align: 'right', value: 'End_DateTime' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      desserts: [],announcements: [],
      editedIndex: -1,
      editedItem: {
        'ActivityID': '',
        'Name' : '',
        'Description': '',
        'Start_DateTime': '',
        'End_DateTime': ''
      },
      defaultItem: {
        'ActivityID': '',
        'Name' : '',
        'Description': '',
        'Start_DateTime': '',
        'End_DateTime': ''
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
        this.announcements = [
          {
            'ActivityID': 'Z',
            'Name' : 'Z',
            'Description': 'Z',
            'Start_DateTime': 'Z',
            'End_DateTime': 'Z'
          },
          {
            'ActivityID': 'X',
            'Name' : 'X',
            'Description': 'X',
            'Start_DateTime': 'X',
            'End_DateTime': 'X'
          }
        ]
      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.announcements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        AnnouncementService.deleteAnnouncement(item.ActivityID).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.announcements.indexOf(item)
            this.announcements.splice(index, 1)
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
        let announcement = {        
            ActivityID: this.editedItem.ActivityID,
            Name: this.editedItem.Name,
            Description: this.editedItem.Description,
            Start_DateTime: this.editedItem.Start_DateTime,
            End_DateTime: this.editedItem.End_DateTime,
        }
        AnnouncementService.insertAnnouncement(announcement).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to insert announcement info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.announcements[this.editedIndex], this.editedItem)
          } else {
            this.announcements.push(this.editedItem)
          }
        }
        })
        
        this.closeI()
        
      },
      //update
      saveU () {
        let announcement = {        
            AcitivityID: this.editedItem.ActivitytID,
            Name: this.editedItem.Name,
            Description: this.editedItem.Description,
            Start_DateTime: this.editedItem.Start_DateTime,
            End_DateTime: this.editedItem.End_DateTime,
        }
        AnnouncementService.updateAnnouncement(announcement.ActivityID, announcement).then(res => {
        if(res.data == 'Error') {
          //do something to handle error
            this.errorMessage = 'Error trying to update announcement info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.announcements[this.editedIndex], this.editedItem)
          } else {
            this.announcements.push(this.editedItem)
          }
        }
        })
        this.closeU()
      },
      async getData () {
        var x = await AnnouncementService.index()
        this.announcements = x.data 
      }
    }

  }
</script>