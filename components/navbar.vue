<template>
  <div class="" v-if="!GET_LOGIN">
    <v-app-bar color="1E1E1E" dark>
      <v-toolbar-title>
        <v-img
          max-height="80"
          max-width="300"
          class="ml-4"
          :src="require('~/assets/mju_logo_FOOTER.png')"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="" v-if="!GET_LOGIN">
        <button class="mr-10" @click="homepage">หน้าหลัก</button>
        <button class="mr-10" @click="pressrelease">ข่าวประชาสัมพันธ์</button>
        <button class="mr-10" @click="news">การอบรม</button>
        <button class="mr-10" @click="about">เกี่ยวกับเรา</button>
      </div>
      <v-btn depressed color="success" @click="login" v-if="!GET_LOGIN"
        >เข้าสู่ระบบ | Log in</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      GET_LOGIN: "users/GET_LOGIN",
    }),
  },
  methods: {
    homepage() {
      this.$router.push("/");
    },
    pressrelease() {
      this.$router.push("/pressrelease");
    },
    news(){
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
    about() {
      this.$router.push("/about");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
