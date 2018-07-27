<template>
<v-app class="APP">
  <v-toolbar class="navbar">
    <v-toolbar-title class="navbartitle">Pacifist # 11187 (This is my Battle.net ID)</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat class="navbaritem" :to="{name: 'HomePage'}" >Home</v-btn>
      <v-btn flat class="navbaritem" :to="{name: 'About'}">About</v-btn>
      <v-btn flat class="navbaritem" :to="{name: 'AnimationPage'}" >Animation</v-btn>
      <v-btn flat class="navbaritem" :to="{name: 'Contact'}">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <router-view></router-view>
</v-app>
</template>

<script>
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Contact from '@/components/Contact'
import AnimationPage from '@/components/AnimationPage'

export default {
  name: 'App',
  components: {
    HomePage,
    About,
    Contact,
    AnimationPage
  }
}
</script>

<style scoped>
.APP {
  background-color: #E9DCCD;
}

.navbar{
  background-color: #36384C;
}

.navbartitle{
  text-transform: none;
  font-family: Georgia;
  color:white;
  font-size: 24px;
}

.navbaritem{
  text-transform: none;
  font-family: Georgia;
  color:white;
  font-size: 16px;
}

.home {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  width: 100%;
}

</style>
