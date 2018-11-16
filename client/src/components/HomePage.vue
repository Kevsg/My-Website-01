<template>
<div class="home">
  <h1>S5 Project by Vue.js</h1>
  <animation-showcase class="anim"/>
  <div class="button-container">
  <router-link to='/parent-crude'><v-btn class="ml-5 noButtonColor" dark>Parent Table</v-btn></router-link>
  <router-link to='/student-crude'><v-btn class="ml-5 noButtonColor" dark>Student Table</v-btn></router-link>
  <router-link to='/announcement-crude'><v-btn class="ml-5 noButtonColor" dark>Annoucement Table</v-btn></router-link>
  <router-link to='/homework-crude'><v-btn class="ml-5 noButtonColor" dark>Homework Table</v-btn></router-link>
  <router-link to='/attendance-crude'><v-btn class="ml-5 noButtonColor" dark>Attendance Table</v-btn></router-link>
  <router-link to='/schedule-crude'><v-btn class="ml-5 noButtonColor" dark>Schedule Control</v-btn></router-link>
  </div>

  <div class="button-container">
  <router-link to='/student-work'><v-btn class="ml-5 noButtonColor">Get Work By Student ID</v-btn></router-link>
  <router-link to='/absent-student'><v-btn class="ml-5 noButtonColor">Get absent Student by day</v-btn></router-link>
  <router-link to='/school-activity'><v-btn class="ml-5 noButtonColor">Get School Activity</v-btn></router-link>
  <router-link to='/teacher-student'><v-btn class="ml-5 noButtonColor">Find Teacher's Student</v-btn></router-link>
  <router-link to='/course-grade'><v-btn class="ml-5 noButtonColor">Get Student Grade in Course</v-btn></router-link>
  </div>

  
</div>
</template>

<script>
import AnimationShowcase from '@/components/AnimationShowcase'

export default {
  name: 'HomePage',
  components: {
    'AnimationShowcase': AnimationShowcase 
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  margin: 20px auto;
}

a {
  text-decoration: none;
}


.button-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

div.box {
  margin-top:5px;
}

</style>


