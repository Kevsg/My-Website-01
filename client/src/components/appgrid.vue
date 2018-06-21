<template>
<div
    class="col-sm"
    @mouseenter="shadows"
    @mouseleave="shadows"
>
    <figure
        class="figure decorimg"
        v-bind:class="{shadow: show}"
    >
        <img
            src="../assets/colordesign.png"
            class="figure-img img-fluid rounded"
            alt="A generic square placeholder image with rounded corners in a figure."
        >
            <figcaption class="figure-caption text-center">{{grid.figuretext}}</figcaption>
            </figure>
            </div>
</template>

<script>
import image from '../assets/colordesign.png'

export default {
  name: 'appgrid',
  data () {
    return {
      image: image
    }
  },
  props: ['grid'],
  methods: {
    toggle: function (grid) {
      grid.show = !grid.show
      console.log('Toggle')
    }
  }
}
</script>

<style scoped>
.decorimg {
    padding: 5px;
    border: 5px solid #36384C;
    background-color: White;
    margin-left: 5px;
    margin-right: 5px;
}

.shadow {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
