<template>
<div class="bg">
        <v-form v-model="valid" class="inputform">
            <v-text-field
            v-model="TeacherIDInput"
            label="Teacher ID"
            required
            ></v-text-field>
            <div>
               
                <v-btn color="yellow darken-3" dark @click="findAssignment">Login</v-btn>

            </div>
        </v-form>
</div>
</template>

<script>

export default {
    name: 'GetTeacherID',
    data: () => ({
      TeacherIDInput: ''
    }),
    methods: {
        findAssignment() {
            let Tid = this.TeacherIDInput
            this.$router.push({ path: `/teacher-assignment/${Tid}` })
      }
    }
}
</script>

<style scoped>
.bg {
    background-color: white;
    margin: 30px;
}
</style>

