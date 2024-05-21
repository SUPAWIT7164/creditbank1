<template>
  <div class="">
    <Navbar />
    <p class="display-2 text-center mt-10">การอบรมที่ผ่านมา</p>
 <v-col cols="12">
        <v-card
          color="#D4FFCA"
          width="auto"
          class="mx-10 mt-10"
          rounded="xl"
          v-for="(item, index) in postData"
          :key="index"
        >
          <v-row class="py-5 px-12">
            <!-- <v-col cols="5" class="my-auto">
              <v-card class="mx-3" rounded="lg">
                <v-img :src="item.pic" width="auto" />
              </v-card>
        
            </v-col> -->
            <v-col cols="7">
              <v-row no-gutters>
                <v-col cols="7">
                  <p class="title tX-color">ชื่อ: {{ item.name }}</p></v-col
                >
                <v-col cols="7">
                  <p class="title tX-color">อาจารย์ผู้สอน: {{ item.teacher }}</p>
                  </v-col>
                <v-col cols="7">
                  <p class="title tX-color">สถานที่เรียน: {{ item.location }}</p>
                  </v-col>
                <v-col cols="7"
                  ><p class="title tX-color">วันที่: {{ item.date }}</p>
                </v-col>
                <v-col cols="7"
                  ><p class="title tX-color">เวลา: {{ item.time }}</p>
                </v-col>
                <v-col cols="7"
                  ><p class="title tX-color">
                    จำนวนผู้ลงสมัครอบรบ: {{ item.total }}
                  </p>
                </v-col>
            <v-col cols="7">
              <v-btn
                class="mr-5"
                depressed
                color="amber lighten-2"
                @click="goHistory"
                >certificate</v-btn
              >
            </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
  </div>
</template>

<script>

import { mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {
      postData: [
        {
          // pic: require("~/assets/Captureddddddddddddddddd.png"),
          name: "การใช้สมุนไพรในสัตว์",
          teacher:"ผสุ เย็นสบาย",
          location:"Online",
          date: "01/02/2024",
          time: "9.00น.- 15.00น.",
          total: "1/20 คน",
      
        },
      ]    
}
},
 methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    goHistory(){
  this.$swal({
        title: "กรุณาเข้าสู่ระบบ",
        icon: "warning",
        position: "center",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
      this.$router.push("/login");
        } 
   });
  },
  mounted() {},
},
};
</script>

<style>
</style>