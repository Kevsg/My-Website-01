Vue.component('jumbo-component', {
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    toggle: function () {
      this.show = !this.show
    }
  },
  template: `
  <div @mouseenter="toggle" @mouseleave="toggle">
   <div class="jumbotron jumbotron-fluid jumbotron-my">
     <div class="container">
       <h1 class="display-4"><b>Welcome!</b></h1>
       <transition name="slide-fade">
         <p class="lead" v-if="this.show">This is a sandbox for you to experiment with your web dev skills.</p>
       </transition>
     </div>
   </div>
   </div>
  `
})

Vue.component('appgrid-component', {
  props: ['grid'],
  methods: {
    toggle: function (grid) {
      grid.show = !grid.show
      console.log('Toggle')
    }
  },
  template: `
    <div class="col-sm">
      <transition name="slide-fade">
        <div v-on:click="grid.show = !grid.show" v-if="grid.show" class="d-inline">
          <figure class="figure decorimg">
            <img src="img/fallsCollection.webp" class="figure-img img-fluid rounded">
            <figcaption class="figure-caption text-center">{{grid.figuretext}}</figcaption>
          </figure>
        </div>
      </transition>
    </div>
  `
})

const app = new Vue({
  el: '#app',
  data: {
    grids: [
      {
        show: true,
        figuretext: 'Color Pallete for this design.'
      },
      {
        show: true,
        figuretext: 'I just want to repeat this picture once.'
      },
      {
        show: true,
        figuretext: 'I just want to repeat this picture twice.'
      },
      {
        show: true,
        figuretext: 'And this is the last one.'
      }
    ],
    anotherthing: []
  },
  template: `
  <div>
    <jumbo-component/>
      <div class="container">
        <div class="row">
          <appgrid-component v-for="grid in grids" v-bind:grid="grid"/>
        </div>
      </div>
    </div>
  </div>
  `
})
