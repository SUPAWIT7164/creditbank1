<template>
  <div>
    <v-col cols="12" class="mt-8">
      <p class="display-2 text-center">ลืมรหัสผ่าน</p>
    </v-col>
    <v-col cols="12">
      <v-card
        width="550px"
        class="mx-auto mt-10 outlined shaped"
        rounded="xl"
        elevation="8"
      >
        <v-card-text class="pb-0">
          <div class="d-flex justify-center">
            <v-img
              max-height="100"
              max-width="100"
              class="text-center mb-5"
              :src="require('~/assets/mju_logo.png')"
            >
            </v-img>
          </div>
          <v-text-field
            class="mt-1"
            outlined
            label="Email"
            maxlength="13"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="">
          <v-row>
            <v-col cols="12" class="text-center">
              <v-btn class="mb-12 rounded-md" color="success" @click="checkEmail"
                ><v-icon>mdi mdi-import</v-icon>ยืนยัน</v-btn
              ></v-col
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>


<script>
import {mapMutations,mapActions} from "vuex";
export default {


methods: {
  // ...mapActions({
  //  SET_USER: "users/SET_USER",
    // }),
  // // ...mapActions({
  // //   Checkuse: "users/Logincheck",
  //   }),
  checkEmail(){
    this.$router.push("/reset");
    },
},
};
</script>
