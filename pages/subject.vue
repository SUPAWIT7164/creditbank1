<template>
  <div>
     <Navbar />
    <h1 class="my-10 text-center">ข้อมูลหลักสูตร</h1>
    <v-card
      depressed
      color="grey lighten-3"
      class=""
    >
      <v-row no-gutters>
        <v-col cols="8" md="8" lg="8" class="d-flex mx-auto justify-end">
          <div class="d-flex justify-start" style="width: 360px">
            <v-select
              class="mt-10 px-2"
              outlined
              label="เลือกวิชา"
              v-model="detail"
              :items="items"
              item-text="name"
              item-value="name"
              
            ></v-select>
          </div>
        </v-col>

        <v-col cols="4" md="4" lg="4" class="d-flex justify-start align-center pl-5 pt-2">
          <v-btn class="" depressed color="success" @click="goDetail"
            >หลักสูตร</v-btn
          >
        </v-col>
        <v-col cols="12" class="text-center mb-5">
          <v-btn class="" depressed color="success">ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-card>
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
                <v-col cols="12">
                  <p class="title tX-color">ชื่อ: {{ item.name }}</p></v-col
                >
                <v-col cols="12">
                  <p class="title tX-color">สถานที่เรียน: {{ item.location }}</p>
                  </v-col>
                <v-col cols="12"
                  ><p class="title tX-color">วันที่: {{ item.date }}</p>
                </v-col>
                <v-col cols="12"
                  ><p class="title tX-color">เวลา: {{ item.time }}</p>
                </v-col>
                <v-col cols="12" 
                  ><p class="title tX-color">
                    จำนวนผู้ลงสมัครอบรบ: {{ item.total }} 
                  </p>
                </v-col>
                 <v-btn class="" depressed color="success" @click="goSuccess(item)"
            >ลงทะเบียน</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
  </div>
</template>

<script>
import { mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {
      detail: null,
      items: [ {
          name: "การปฐมพยาบาลและการกชีพเบื้องต้นในสัตว์เลี้ยง",
        },
        {
          name: "การดูแลสุนัขเบื้องต้น",
        },
        {
          name: "การใช้สมุนไพรในสัตว์",
        },
        {
          name: "การดูแลแมวเบื้องต้น",
        },
          ],
         postData: [
        {
          // pic: require("~/assets/Captureddddddddddddddddd.png"),
          name: "การใช้สมุนไพรในสัตว์",
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
    //  ...mapActions({
    //   listSub: "users/showSubDa",
    // }),
    goDetail() {
      this.$router.push("/users/detailsubject");
    },
    //  async showSubData() {
    //   this.postData = await this.listSub();
    //   console.log(this.postData);
    // },
  },
  //  mounted() {
  //   this.showSubData();
  // },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.v-select {
  margin: 0;
}
</style>
