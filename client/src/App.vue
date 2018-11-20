<template>
<v-app class="APP">
  <div class="dgrid">
    <div class="sidebar">
      <ul>
        <li>ข่าวสาร</li>
        <router-link :to="{ name: 'teacher-assignment'}"><li>การบ้าน</li></router-link>
        <li>ตารางเรียน/ตารางสอบ</li>
        <li>ข้อมูลนักเรียน</li>       
        <li>ติดต่อครูประจำชั้น</li> 
      </ul>
          
    </div>
      <div class="content">
        <router-view></router-view>
     </div>
  </div>
</v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|Trirong');

@font-face {
  font-family: ChulaCharasNewReg;
  src: url(/assets/CHULALONGKORNReg.otf) format('otf')
}

ul {
  padding-left:0em;
}

a {
  text-decoration: none;
  color: #424242;
}

li {
  font-size: 1.5em;
  list-style-type: none;
  padding-top: 20px;
  padding-right:5px;
  padding-bottom:20px;
  font-family: 'Kanit', sans-serif;
  color: #424242;
  padding-left: 1em;
}

li:hover {
  background-color: #FFE0B2;
}
.dgrid {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: minmax(100vh, 100%);
  font-family: 'ChulaCharasNewReg';
  background-color:#FFFBE8;
}
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #FFCC73;
}

</style>