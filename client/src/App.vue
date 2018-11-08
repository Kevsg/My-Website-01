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
