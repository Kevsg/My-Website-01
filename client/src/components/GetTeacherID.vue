<template>
<div class="bg">
        <v-form v-model="valid" class="inputform">
            <v-text-field
            v-model="TeacherIDInput"
            label="Teacher ID"
            required
            ></v-text-field>
            <div>
               
                <v-btn color="yellow darken-3" dark @click="gotoNextPage">Login</v-btn>

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
        gotoNextPage() {
            let Tid = this.TeacherIDInput
            if(this.$route.name == 'teacher-assignment') {
                this.$router.push({ path: `/teacher-assignment/${Tid}` })
            }
            else if (this.$route.name == 'teacher-attendance'){
                this.$router.push({ path: `/teacher-attendance/${Tid}` })
            }

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

