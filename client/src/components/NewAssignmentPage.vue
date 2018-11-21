<template>
<div>
    <div class="bg2">
    <h1 class="my-3 mx-5">การบ้าน</h1>

    <div class="mb-2">
    <h2 class="d-inline ml-5 mr-3">วิชา</h2>
    <v-select
        :items="subjectSelection.items"
        label="วิชาที่สอน"
        v-model="subjectSelect"
        class="d-inline-block mr-5"
        solo
    ></v-select>


    <h2 class="d-inline ml-5 mr-3">ห้อง</h2>
        <v-select
        :items="classSelection.items"
        label="ห้องที่สอน"
        class="d-inline-block"
        v-model="classSelect"
        solo
    ></v-select>

    </div>


    <v-form>

        <div class="pr-5 mb-4 x">
        <h2 class="d-inline ml-5 mr-3 mt-1">หัวข้อ</h2>
        
        <v-text-field 
        label="หัวข้อ"
        solo
        v-model="nameInput"
        class="d-inline-block"
        ></v-text-field>

        </div>

        <div class="x mb-4">
        <h2 class="ml-5 d-inline mt-1">รายละเอียด</h2>

        <v-textarea
          solo
          label="รายละเอียด"
          full-width
          v-model="descriptionInput"
          class="mx-5 d-inline-flex"
        ></v-textarea>
        </div>


        <div class="f2 mx-5">
        <h2 class="d-inline mr-5 mt-1"> กำหนดส่ง</h2>
        <v-text-field class="d-inline-block m-1"
        label="YYYY/MM/DD "
        solo
        v-model="dateInput"
        ></v-text-field>

        <h2 class="d-inline mx-5 mt-1">ประเภท</h2>
        <v-select
        :items="assignmentType.items"
        label="ประเภท"
        v-model="assignmentTypeInput"
        class="d-inline-block mr-5"
        solo
        ></v-select>

        <h2 class="d-inline mx-5 mt-1">คะแนนเต็ม</h2>
        <v-text-field
        label="คะแนนเต็ม"
        solo
        class="d-inline-block"
        v-model="fullscoreInput"
        ></v-text-field>


        </div>

        <div class="d-block mx-5" >
        <v-btn class="yellow darken-3" @click="createAssignment" dark>ยืนยัน</v-btn>
        
        <v-btn class="yellow darken-3" @click="goBack" dark>ยกเลิก</v-btn>
        </div>

    </v-form>

    </div>

</div>
</template>


<script>
import TeacherService from '@/services/TeacherService.js'

  export default {
    data: () => ({
        subjectSelect: '',
        classSelect: '',
        valid: false,
        subjectSelection: {items:[]},
        classSelection: {items:[]},
        assignmentType: {items:['Homework','Test']},
        subjectInput: '',
        classInput: '',
        nameInput:'',
        descriptionInput:'',
        dateInput:'',
        fullscoreInput:'',
        assignmentTypeInput: '',
        assignment: [],
        originalAssignments: [],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        subjectID: ''
    }),

    watch: {
      subjectSelect: function (val) {
        let result3 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val)
        let result4 = [...new Set(result3.map(assignment => assignment.ClassID))]
        this.classSelection.items = result4
        let result5 = [...new Set(result3.map(assignment => assignment.SubjectID))] 
        this.subjectID = result5[0]
      },
      classSelect: function (val) {
        let result4 = this.originalAssignments.filter(assignment => assignment.ClassID == val && assignment.Subject_Name == this.subjectSelect)
        this.assignments = result4
      }
    },

    async mounted() {
        this.getData()
    },
    methods: {

        async getData () {
            let tid = this.$route.params.id
            var x = await TeacherService.getAssignment(tid)
            this.assignments = x.data
            this.originalAssignments = x.data
            console.log(this.originalAssignments)
            let result1 = [...new Set(this.originalAssignments.map(x1 => x1.Subject_Name))]
            this.subjectSelection.items = result1
        },

      async createAssignment() {
          let tid = this.$route.params.id
          let x = await TeacherService.getClassYear('classSelect')
          let y =  x.data[0].Year  
          console.log(y)
          let assignment = {
              subject : this.subjectSelect,
              class: this.classSelect,
              name: this.nameInput,
              description: this.descriptionInput,
              date: this.dateInput,
              fullscore: this.fullscoreInput,
              subjectID: this.subjectID,
              assignmentType: this.assignmentTypeInput,
              classYear: y,
              type : this.assignmentTypeInput
          }
          console.log(assignment)
          TeacherService.createAssignment(tid, assignment).then(this.$router.push({ path: `/teacher-assignment/${tid}` })    
      )
      },
      goBack() {
          let tid = this.$route.params.id
          this.$router.push({ path: `/teacher-assignment/${tid}` })    
      }
    }
  }
</script>

<style scoped>
.bg2{
  background-color: white;
  padding: 1.5em;
  margin: 30px;
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


