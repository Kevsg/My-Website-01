<template>
  <div class="bg">

    <div v-if="showIndexPage">
     <v-alert
      v-model="alert"
      dismissible
      type="error"
    >
      {{this.errorMessage}}
    </v-alert>

    <v-toolbar flat color="white" class="px-3 my-1">
      <v-toolbar-title class="tableTitle display-1 d-flex-inline" > <div class="t">การบ้าน</div>
        <v-btn slot="activator" class="my-5 mx-3" color="yellow darken-3" dark @click="gotoInsert">+  เพิ่ม</v-btn>
        <div class="filter d-inline-flex">
          <v-select
            :items="subjectSelection.items"
            label="วิชาที่สอนทั้งหมด"
            solo
            class="filter1 mx-3 "
            v-model="subjectSelect"
          ></v-select>
          <v-select
            :items="classSelection.items"
            label="ห้องที่สอนทั้งหมด"
            solo
            class="filter2 mx-3"
            v-model="classSelect"
          ></v-select>
        </div>
      </v-toolbar-title>

      <v-dialog v-model="dialogI" max-width="500px">
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
      :items="assignments"
      class="elevation-1 my-4 mx-5"
    >
      <template slot="items" slot-scope="props">
        <td >{{ props.item.WorkID }}</td>
        <td class="text-xs-center">{{ props.item.Subject_Name }}</td>
        <td class="text-xs-center">{{ props.item.ClassID }}</td>
        <td class="text-xs-left">{{ props.item.Name }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="changeToEditPage(props.item)"
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
        <h1>No Results</h1>
      </template>
    </v-data-table>
    </div>
    
  <!-- Edit Page !-->  
    
  <div class="bg2" v-if="showEditPage">

    <h1 class="my-3 mx-5">การบ้าน</h1>

    <div class="abc">
      <v-btn class="b1" color="yellow darken-1" depressed @click="changeToEditPage">ข้อมูลการบ้าน</v-btn>
      <v-btn class="b2" color="yellow lighten-4" depressed @click="changeToCheckPage">ตรวจการบ้าน</v-btn>
    </div>

    <div class="mb-2">

    <h2 class="d-inline ml-5 mr-3">วิชา</h2>
    <v-select
        :items="subjectSelection.items"
        label="วิชาที่สอน"
        v-model="EditedsubjectSelect"
        class="d-inline-block mr-5"
        solo
    ></v-select>


    <h2 class="d-inline ml-5 mr-3">ห้อง</h2>
        <v-select
        :items="classSelection.items"
        label="ห้องที่สอน"
        class="d-inline-block"
        v-model="EditedclassSelect"
        solo
    ></v-select>

    </div>


    <v-form>

        <div class="pr-5 mb-4 x">
        <h2 class="d-inline ml-5 mr-3 mt-1">หัวข้อ</h2>
        
        <v-text-field 
        label="หัวข้อ"
        solo
        v-model="EditednameInput"
        class="d-inline-block"
        ></v-text-field>

        </div>

        <div class="x mb-4">
        <h2 class="ml-5 d-inline mt-1">รายละเอียด</h2>

        <v-textarea
          solo
          label="รายละเอียด"
          full-width
          v-model="EditeddescriptionInput"
          class="mx-5 d-inline-flex"
        ></v-textarea>
        </div>


        <div class="f2 mx-5">
        <h2 class="d-inline mr-5 mt-1"> กำหนดส่ง</h2>
        <v-text-field class="d-inline-block m-1"
        label="YYYY/MM/DD "
        solo
        v-model="EditeddateInput"
        ></v-text-field>

        <h2 class="d-inline mx-5 mt-1">คะแนนเต็ม</h2>
        <v-text-field
        label="คะแนนเต็ม"
        solo
        class="d-inline-block"
        v-model="EditedfullscoreInput"
        ></v-text-field>
        </div>

        <div class="d-block mx-5" >
        <v-btn class="yellow darken-3" dark>ยืนยัน</v-btn>
        
        <v-btn class="yellow darken-3" @click="goBack" dark>ยกเลิก</v-btn>
        </div>

    </v-form>

    </div>

    
    <!-- Check Page !-->

    <div class="check bg2" v-if="showCheckPage">
      <h1 class="my-3 mx-5">การบ้าน</h1>

      <div class="edit">
        <div class="abc">
        <v-btn class="b1" color="yellow lighten-4" depressed @click="changeToEditPage">ข้อมูลการบ้าน</v-btn>
        <v-btn class="b2" color="yellow darken-1" depressed @click="changeToCheckPage">ตรวจการบ้าน</v-btn>
        </div>

         <v-data-table
            :headers="checkTableHeaders"
            :items="students"
            class="elevation-1  my-1 mx-5 d-inline"
          >
            <template slot="items" slot-scope="props" @click="changeToEditPage">
              <td >{{ props.item.sid}}</td>
              <td class="text-xs-center">{{ props.item.sname }}</td>
              <td class="text-xs-center">{{ props.item.checkwork }}</td>
              <td class="text-xs-center">{{ props.item.score }}</td>

            </template>
      
            <template slot="no-data">
              <h1>No Results</h1>
            </template>
          </v-data-table>
      </div>
    </div>

    

  </div>
</template>


<script>
import TeacherService from '@/services/TeacherService.js'

  export default {
    data: () => ({
      dialogI: false,
      dialogU: false,
      alert: false,
      errorMessage: '',
      headers: [
        {
          text: 'WorkID',
          align: 'left',
          sortable: true,
          value: 'WorkID'
        },
        { text: 'วิชา', align: 'center',value: 'Subject_Name' },
        { text: 'ห้อง', align: 'center', value: 'ClassID' },
        { text: 'หัวข้อ', align: 'center', value: 'Name' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      checkTableHeaders: [
        {
          text: 'เลขที่',
          align: 'left',
          sortable: true,
          value: 'WorkID'
        },
        { text: 'ชื่อ', align: 'center',value: 'Subject_Name' },
        { text: 'ตรวจแล้ว', align: 'center', value: 'ClassID' },
        { text: 'คะแนน', align: 'center', value: 'Name' },
      ],
      originalAssignments: [],
      assignments: [],
      students: [
        {
          sid: '1',
          sname: 'Kevin',
          checkwork: true,
          score: '99'
        },
        {
          sid: '2',
          sname: 'Tae',
          checkwork: false,
          score: '-8' 
        }
      ],
      editedIndex: -1,
      editedItem: {
        'sjName': '',
        'wName' : '',
        'Description': '',
        'Full_Score': '',
        'Type': ''
      },
      defaultItem: {
        'sjName': '',
        'wName' : '',
        'Description': '',
        'Full_Score': '',
        'Type': ''
      },
      subjectSelection: {items:[]},
      classSelection: {items:[]},
      teachingSubjects: {items:[]},
      teachingClasses: {items:[]},
      showIndexPage: true,
      showEditPage: false,
      showCheckPage: false,
      classSelect: '',
      subjectSelect: '',
      nameInput: '',
      descriptionInput: '',
      dateInput: '',
      fullscoreInput: '',

      EditedclassSelect:'',
      EditedsubjectSelect:'',
      EditednameInput: '',
      EditeddescriptionInput: '',
      EditeddateInput: '',
      EditedfullscoreInput: ''

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Assignment' : 'Edit Assignment'
      }
    },

    created () {
      this.initialize()
    },

    async mounted() {
      this.getData()
    },  

    watch: {
      dialog (val) {
        val || this.close()
      },
      subjectSelect: function (val) {
        let result2 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val);
        this.assignments = result2
        let result3 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val)
        let result4 = [...new Set(result3.map(assignment => assignment.ClassID))]
        this.classSelection.items = result4
      },
      classSelect: function (val) {
        //change assignment to corresponding class
        let result4 = this.originalAssignments.filter(assignment => assignment.ClassID == val && assignment.Subject_Name == this.subjectSelect)
        this.assignments = result4
      },
      EditedsubjectSelect: function (val) {
        let result2 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val);
        this.assignments = result2
        let result3 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val)
        let result4 = [...new Set(result3.map(assignment => assignment.ClassID))]
        this.classSelection.items = result4
      }
    },

    methods: {
      initialize () {
        this.assignments = [
          {
            'ClassID': 'A',
            'Name' : 'A',
            'Subject_Name': 'A',
            'WorkID': 'A',
            'Checked': 'A'
          },
          {
            'ClassID': 'B',
            'Name' : 'B',
            'Subject_Name': 'B',
            'WorkID': 'B',
            'Checked': 'B'
          }
        ]
1      },
      //Open edit popup
      editItem (item) {
        this.editedIndex = this.assignments.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogU = true
      },
      //delete
      deleteItem (item) {
        console.log('Delete', item.WorkID)
        TeacherService.deleteAssignment(item.WorkID).then((res) => {
          if(res.data == 'Error') {
            //do something to handle error
            this.error = true
          } else {
            const index = this.assignments.indexOf(item)
            this.assignments.splice(index, 1)
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
        TeacherService.insertAssignment(subject).then(res => {
        if(res.data == 'Error') {
            this.errorMessage = 'Error trying to insert subject info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.assignments[this.editedIndex], this.editedItem)
          } else {
            this.assignments.push(this.editedItem)
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
            this.errorMessage = 'Error trying to update subject info.'
            this.alert = true
        } else {
          if (this.editedIndex > -1) {
            Object.assign(this.assignments[this.editedIndex], this.editedItem)
          } else {
            this.assignments.push(this.editedItem)
          }
        }
        })
        this.closeU()
      },
      async getData () {
        let tid = this.$route.params.id
        var x = await TeacherService.getAssignment(tid)
        this.assignments = x.data
        this.originalAssignments = x.data
        // set subject
        let result1 = [...new Set(this.originalAssignments.map(x1 => x1.Subject_Name))]
        this.subjectSelection.items = result1
      },
      gotoInsert () {
        let Tid = this.$route.params.id
        this.$router.push({ path: `/teacher-assignment/${Tid}/create` })
      },
      changeToEditPage(work) {
          this.EditedsubjectSelect = work.Subject_Name
          this.EditednameInput = work.Name
          this.EditedclassSelect = work.ClassID
          this.EditeddescriptionInput = ''
          this.EditeddateInput = ''
          this.EditedfullscoreInput = ''
          this.showIndexPage = false
          this.showCheckPage = false
          this.showEditPage = true
      },
      goBack() {
          this.showIndexPage = true
          this.showCheckPage = false
          this.showEditPage = false
      },
      changeToCheckPage() {
          this.showIndexPage = false
          this.showCheckPage = true
          this.showEditPage = false
      }
    }

  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit|Trirong');

.ab {
  display: flex;
  justify-content: center;
}

.abc {
  display: flex;
  justify-content: center;
  height: auto;
}

.filter {
  display: inline-flex;
  justify-content: flex-end;
}

.filter1 {
  display: inline-block;
  margin-right:10px;
}

.filter2 {
  display: inline-block !important;
  margin-right:5px;
}

.b1{
  margin-bottom:5vh;
  margin-right:0px;
  font-size: 1em;
  width:10vw;
}

.b2{
  margin-bottom:5vh;
  margin-left:0px;
  width:10vw;
}

.bg {
  background-color: white;
  padding: 1.5em;
  margin: 30px;
}

.t {
  font-family: 'Kanit', sans-serif !important;
  display: inline;
  font-size: 1em;
}

.bg2{
  background-color: white;
  color: #424242;
  font-family: 'Kanit', sans-serif;
}

.x {
    display: flex;
}

.f2 {
    display: flex;
    justify-content: space-around;
    padding-top:5px;
}

</style>
