<template>
  <div id="app">
    <router-link to="/">
      <nav class="navbar-my">
        <a class="navbar-brand">
          <img :src="image"  width="68" height="50" class="d-inline-block align-top">
            <h1 class="navbartext d-inline-block">Pacifist</h1>
        </a>
        <a class="d-inline-block"></a>
     </nav>
   </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import image from './assets/simple-logo2.png'

export default {
  name: 'App',
  data: function () {
    return {
      image: image
    }
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #E9DCCD;
  min-width: 100vw;
  min-height: 100vh;
}

.navbar-my{
  background-color: #36384C;
  display: flex;
}

.navbartext{
  padding-left: 10px;
  font-size: 40px;
  color: #E9DCCD;
}
</style>
