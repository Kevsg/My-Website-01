<template>
<div>

    <h1 class="my-3 mx-5">การบ้าน</h1>

    <h2 class="d-inline ml-5 mr-3">วิชา</h2>
    <v-select
        :items="subjectSelection.items"
        label="วิชาที่สอน"
        v-model=subjectSelect
        class="d-inline-block mr-5"
        solo
    ></v-select>

    <h2 class="d-inline ml-5 mr-3">ห้อง</h2>
        <v-select
        :items="classSelection.items"
        label="ห้องที่สอน"
        class="d-inline-block"
        v-model=classSelect
        solo
    ></v-select>


    <v-form>

        <h2 class="d-inline ml-5 mr-3">หัวข้อ</h2>
        
        <v-text-field 
        label="หัวข้อ"
        solo full-width
        v-model=nameInput
        class="d-inline-block h"
        ></v-text-field>

         <h2 class="ml-5 mr-3 mb-3">รายละเอียด</h2>

        <v-textarea
          solo
          label="รายละเอียด"
          v-model="descriptionInput"
          class="mx-5"
        ></v-textarea>


        <h2 class="d-inline mx-5"> กำหนดส่ง</h2>
        <v-text-field class="d-inline-block"
        label="YYYY/MM/DD "
        solo
        v-model="dateInput"
        ></v-text-field>

        <h2 class="d-inline mx-5">คะแนนเต็ม</h2>
        <v-text-field
        label="คะแนนเต็ม"
        solo
        class="d-inline-block"
        v-model="fullscoreInput"
        ></v-text-field>
        <div class="d-block mx-5">
        <v-btn class="yellow darken-3" @click="createAssignment" dark>ยืนยัน</v-btn>
        
        <v-btn class="yellow darken-3" @click="goBack" dark>ยกเลิก</v-btn>
        </div>

    </v-form>



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
        subjectInput: '',
        classInput: '',
        nameInput:'',
        descriptionInput:'',
        dateInput:'',
        fullscoreInput:'',
        assignment: [],
        originalAssignments: [],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false
    }),

    watch: {
      subjectSelect: function (val) {
        //Change showing assignment to one with the corresponding subject name
        let result2 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val);
        // Change class dropdown to one with the subject Name
        let result3 = this.originalAssignments.filter(assignment => assignment.Subject_Name == val)
        let result4 = [...new Set(result3.map(assignment => assignment.ClassID))]
        this.classSelection.items = result4
      },
      classSelect: function (val) {
        //change assignment to corresponding class
        let result4 = this.originalAssignments.filter(assignment => assignment.ClassID == val && assignment.Subject_Name == this.subjectSelect)
        this.assignments = result4
      }
    },

    mounted() {
        this.getData()
    },
    methods: {

        async getData () {
            let tid = this.$route.params.id
            var x = await TeacherService.getAssignment(tid)
            this.assignments = x.data
            this.originalAssignments = x.data
            // set subject
            let result1 = [...new Set(this.originalAssignments.map(x1 => x1.Subject_Name))]
            this.subjectSelection.items = result1
        },

      async createAssignment() {
          let tid = this.$route.params.id
          let p = {
              subject : this.subjectInput,
              class: this.classInput,
              name: this.nameInput,
              description: this.descriptionInput,
              date: this.dateInput,
              fullscore: this.fullscoreInput
          }
          console.log(p)
          var y = await TeacherService.createAssignment(tid,p)
          console.log(y)
          this.$router.push({ path: `/teacher-assignment/${tid}` })
      },
      goBack() {
          let tid = this.$route.params.id
          this.$router.push({ path: `/teacher-assignment/${tid}` })    
      }
    }
  }
</script>

