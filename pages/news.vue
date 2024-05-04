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
          <v-row class="py-5">
            <v-col cols="5" class="my-auto">
              <v-card class="mx-3" rounded="lg">
                <v-img :src="item.pic" width="auto" />
              </v-card>
        
            </v-col>
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
                <v-btn class="" depressed color="amber lighten-1" @click="goHistory"
            >Certificate</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
  </div>
</template>

<script>

import { mapMutations } from "vuex";
export default {
  data() {
    return {
      postData: [
        {
          pic: require("~/assets/Captureddddddddddddddddd.png"),
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
    goHistory() {
      this.$router.push("/history");
    },
  },
};
</script>

<style>
</style>