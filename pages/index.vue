<template>
  <div id="bg-index">
    <Navbar />
    <v-container>
      <v-img :aspect-ratio="16 / 9" :src="require('~/assets/education.png')">
        <v-img
          max-height="100"
          max-width="100"
          class="ml-10 mt-10"
          :src="require('~/assets/mju_logo.png')"
        >
        </v-img>
        <h1 class="ml-10 mt-5">หลักสูตรการศึกษาตลอดชีวิต</h1>
        <v-btn class="ml-10 mt-3" depressed color="success" @click="goSubject"
          >เลือกหลักสูตร</v-btn
        >
        <h4 class="ml-10 mt-10">คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์</h4>
        <h4 class="ml-10 mt-0">มหาวิทยาลัยแม่โจ้</h4>
        <h4 class="ml-10 mt-2">
          <v-icon large color="black">mdi-phone</v-icon>0 5387 3827
        </h4>
        <h4 class="ml-10 mt-2">
          <v-icon large color="black">mdi-map-marker</v-icon>Nong Han, San Sai
          District, Chiang Mai 50290
        </h4>
        <h4 class="ml-10 mt-2">
          <v-icon large color="black">mdi-email</v-icon>science@mju.ac.th
        </h4>
      </v-img>
    </v-container>
    <v-container>
      <v-row>
        <!-- <v-col cols="12" class="display-1 font-weight-black">
          ข่าวประชาสัมพันธ์
        </v-col> -->
        <!-- <v-col cols="12" class="d-flex justify-center">
          <v-carousel v-model="model" style="width: 100%; height: 550px">
            <v-carousel-item
              v-for="(item, i) in colors"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
            >
              <img :src="item.src" style="width: 100%; height: 100%" /> -->
            <!-- </v-carousel-item>
          </v-carousel>
        </v-col> -->
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" class="display-1 font-weight-black" id="newss">
        </v-col>

        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapMutations,mapActions } from "vuex";
export default {
  data: () => ({
    model: 0,
    colors: [
      // {
      //   src: require("~/assets/423619428_1273427543573910_6746996740425044430_n.png"),
      // },
      // {
      //   src: require("~/assets/423619568_1415588712416905_4794891260263850231_n.png"),
      // },
    ],
  }),
  created() {
    this.SET_LOGIN(false);
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
// gotoLogin "login",
    }),
    goSubject(){
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

<style scoped></style>
