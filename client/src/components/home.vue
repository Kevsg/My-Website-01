<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid jumbotron-my" @mouseenter="toggle" @mouseleave="toggle">
      <div class="container">
        <h1 class="display-4">Welcome!</h1>
        <transition name="slide-fade">
         <p class="lead" v-if="this.show">This is a sandbox for you to experiment with your web dev skills.</p>
        </transition>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-sm">
          <router-link to="/animationshowcase/">
          <figure class="figure decorimg">
            <img :src="image" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            <figcaption class="figure-caption text-center">Color Pallete for this website.</figcaption>
          </figure>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/firstroute/Sebastian/child">
          <figure class="figure decorimg">
            <img :src="image" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            <figcaption class="figure-caption text-center">I just want to repeat this picture.</figcaption>
          </figure>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/firstroute/Sebastian/child">
          <figure class="figure decorimg">
            <img :src="image" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            <figcaption class="figure-caption text-center">Twice.</figcaption>
          </figure>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import image from '../assets/colordesign.png'
import appgrid from './appgrid.vue'

export default {
  name: 'Hello2',
  component: {
    appgrid
  },
  data () {
    return {
      show: false,
      image: image,
      appgrid: appgrid
    }
  },
  methods: {
    toggle: function () {
      this.show = !this.show
      console.log('Toggle')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {background-color: #E9DCCD;}

.jumbotron-my{
  background-color: #E3BAB3;
  color: #613A43;
}
.decorimg {
  padding: 5px;
  border:5px solid #36384C;
  background-color: White;
  margin-left: 5px;
}

.decorimg:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
