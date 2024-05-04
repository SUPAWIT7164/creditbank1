<template>
    <div>
<Navbarteacher />
 <v-col cols="12">
      <p class="display-1 text-center g-color mt-10">รายละเอียดการอบรม</p>
    </v-col>


    </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            
        }
    },
    methods: {
        ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    },
}
</script>

<style scoped>
.g-color {
  color: rgb(25, 215, 25);
  font-weight: 700;
  font-size: 40px !important;
}
</style>

