<template>
<div class="home">
  <Result-List/>
  <Insert/>
</div>
</template>

<script>
import Insert from './Insert.vue'

export default {
  name: 'HomePage',
  components: {
    Insert
  },
}
</script>

<style scoped>



</style>



<!--  

<template>
<div class="home">
  <div class="landing-grid"> 
    <div id="p1"><img src="" alt="Load Failed"></div>
    <div id="p2"><img src="" alt="Load Failed"></div>
    <div id="t1"><h1>Art</h1></div>
    <div id="p3"><img src="" alt="Load Failed"></div>
    <div id="t2"><h1>Gallery</h1></div>
  </div>

  <div class="information">
    <div><img src="" alt=""><p></p></div>
    <div><img src="" alt=""><p></p></div>
  </div>

  <div class="quote"><h2></h2></div>

  <div class="call-to-action"><form action=""></form></div>

  <div class="foot"></div>
</div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css?family=Srisakdi');
@import url('https://fonts.googleapis.com/css?family=Poiret+One');


.home {
  border-style: solid;
  border-color: red;
}

.landing-grid {
  border-style: solid;
  grid-gap: 10px;
  display: grid;
  height: 97vh;
  width: 99vw;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  box-sizing: border-box;
  
}

#p1 {

}

#p2 {

}

#p3 {
  grid-row-start: 2;
  grid-column-end: 2;

}

#t1 {
  font-size: 5vw;
  grid-row-start: 1;
  grid-column-end: 4;
  justify-self: end;
  align-self: end;
  font-family: 'Poiret One', cursive;
  color: white;
  padding-right: 30px;
}

#t2 {
  font-size: 5vw;
  grid-row-start: 2;
  grid-column-start: 3;
  justify-self: end;
  align-self: start;
  font-family: 'Poiret One', cursive;
  color: white;
  padding-right: 30px;
}



.information {
  display: flex;
}

.foot {
  display:flex;
  height: 3000px;
}

</style>

-->