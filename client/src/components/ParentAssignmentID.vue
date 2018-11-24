<template>
  <div class="bg">

    <div>
     <v-alert
      v-model="alert"
      dismissible
      type="error"
    >
      {{this.errorMessage}}
    </v-alert>

      <v-dialog v-model="dialogV" max-width="50vw">
        <v-card>
          <v-card-title>
            <span class="headline">{{this.viewWorkName}}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field  label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

        </v-card>
      </v-dialog>

    <v-toolbar flat color="white" class="px-3 my-1">
      <v-toolbar-title class="display-1" > 
        <div class="t d-inline">การบ้าน</div>
      </v-toolbar-title>
        <v-spacer class="d-inline-flex"/>
        <div class="d-inline">
          <v-select
            :items="subjectSelection.items"
            label="วิชาที่สอนทั้งหมด"
            solo
            class="filter1 mx-3 "
            v-model="subjectSelect"
          ></v-select>
          <v-select
            :items="classSelection.items"
            label="การบ้านทั้งหมด"
            solo
            class="filter2 mx-3"
            v-model="classSelect"
          ></v-select>
        </div>

    </v-toolbar>

    
    <v-data-table 
      :headers="headers"
      :items="assignments"
      class="elevation-1 my-4 mx-5"
    >
    
      <template slot="items" slot-scope="props">
        <td class="text-xs-center" @click="viewDialog(props.item)">{{ props.item.wDueDate}}</td>
        <td class="text-xs-center" @click="viewDialog(props.item)">{{ props.item.sjName }}</td>
        <td class="text-xs-center" @click="viewDialog(props.item)">{{ props.item.wName }}</td>
        <td class="special" @click="viewDialog(props.item)">
        <v-checkbox class="mr-0" color="yellow darken-2" readonly v-model="props.item.check"/>
        </td>
      </template>
      <template slot="no-data">
        <h1>No Results</h1>
      </template>
    </v-data-table>
    </div>

  </div>
</template>

<script>
import ParentHService from '@/services/ParentHService.js'

export default {
    data: () => ({
        errorMessage: '',
        alert: false,
        alerttrue: true,
        headers: [
            { text: 'วันที่', align: 'center', sortable: true, value: 'wDueDate'},
            { text: 'วิชา', align: 'center', sortable: true,value: 'sjName' },
            { text: 'หัวข้อ', align: 'center', sortable: true, value: 'wName' },
            { text: 'ตรวจแล้ว', align: 'left', sortable: true,value: 'check'}
        ],
        subjectSelect: '',
        classSelect: '',
        subjectSelection: {items:[]},
        classSelection: {items:[]},
        originalAssignments: [],
        assignments:[],
        dialogV: false,
        viewWorkName: ''
    }),
    watch : {
      subjectSelect: function (val) {
        let result2 = this.originalAssignments.filter(assignment => assignment.sjName == val);
        let a = this.result2.map(a => a.wDueDate === null ? {...a} : {...a, wDueDate : a.wDueDate.split('T')[0]})
        this.assignments = a
        let result3 = this.originalAssignments.filter(assignment => assignment.sjName == val)
        let result4 = [...new Set(result3.map(assignment => assignment.ClassID))]
        this.classSelection.items = result4
      },
    },
    async mounted() {
      this.init()
    },  
    methods: {
      async init () {
        let pid = this.$route.params.id
        let response = await ParentHService.index(pid)
        this.originalAssignments = response.data

        let result = await Promise.all(this.originalAssignments.map(async (r) => {
            let checkornot = await ParentHService.isThisTaskCheck(pid, r.wID)
            return {...r, check: checkornot.data[0].A === '0' ? false : true}
        }));

        let a = result.map(a => a.wDueDate === null ? {...a} : {...a, wDueDate : a.wDueDate.split('T')[0]})
        this.assignments = a
        //set subject dropdown
        let result1 = [...new Set(this.originalAssignments.map(x1 => x1.sjName))]
        this.subjectSelection.items = result1
      },
      viewDialog(item) {
        console.log(item)
        this.viewWorkName = item.wName
        this.dialogV = true;
      },
      closeDialog() {
        this.dialogV = false;
      }
    },

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


.bg {
  background-color: white;
  padding: 1.5em;
  margin: 30px;
}

.t {
  font-family: 'Kanit', sans-serif !important;
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
