<template>
<v-app class="APP">
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

</style>


<!--

<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

