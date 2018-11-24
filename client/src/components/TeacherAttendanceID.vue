<template>
<div class="bg">
    <v-toolbar flat color="white" class="px-3 my-1">
      <v-toolbar-title class="tableTitle display-1 d-flex-inline" > <div class="t">การเข้าเรียน</div>
      </v-toolbar-title>
    </v-toolbar>

    <v-btn large outline  color="yellow darken-3">สถิติการเข้าเรียน</v-btn>
    <v-btn large dark color="yellow darken-3">เช็คชื่อ</v-btn>

    <h2 class="d-inline mx-5 mt-1">วันที่</h2>
        <v-select
        :items="daySelection.items"
        label="ประเภท"
        class="d-inline-block mr-5"
        solo
        ></v-select>

</div>
</template>

<script>
export default {
    data: () => ({
        daySelection: {items:['Test1','Test2']}
    })
}
</script>


<style scoped>

.bg {
  background-color: white;
  padding: 1.5em;
  margin: 30px;
}

.t {
  font-family: 'Kanit', sans-serif !important;
  display: inline;
  font-size: 1em;
}
</style>

