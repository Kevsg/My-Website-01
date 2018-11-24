<template>
<div class="bg">
        <v-form v-model="valid" class="inputform">
            <v-text-field
            v-model="IDInput"
            label="Please input your teacher/parentID"
            required
            ></v-text-field>
            <div>
               
                <v-btn color="yellow darken-3" dark depressed @click="gotoNextTeacherPage">Teacher Login</v-btn>
                <v-btn color="teal lighten-1" dark depressed @click="gotoNextParentPage">Parent Login</v-btn>

            </div>
        </v-form>
</div>
</template>

<script>

export default {
    name: 'GetID',
    data: () => ({
      IDInput: '',
      valid: true
    }),
    methods: {
        gotoNextTeacherPage() {
            let id = this.IDInput
            if(this.$route.name == 'assignment') {
                this.$router.push({ path: `/teacher-assignment/${id}` })
            }
            else if (this.$route.name == 'attendance') {
                this.$router.push({ path: `/teacher-attendance/${id}` })
            }
        },
        gotoNextParentPage() {
            let id = this.IDInput
            if(this.$route.name == 'assignment') {
                this.$router.push({ path: `/parent-assignment/${id}` })
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

