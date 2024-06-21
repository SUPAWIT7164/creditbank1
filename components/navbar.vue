<template>
  <div class="" v-if="!GET_LOGIN">
    <v-app-bar color="1E1E1E" dark>
      <v-toolbar-title>
        <v-flex xs-12 sm>
          <span class="text-h6"></span>
        </v-flex>
        <v-img
          v-if="!$vuetify.breakpoint.xs"
          max-height="80"
          max-width="300"
          class="ml-4"
          :src="require('~/assets/mju_logo_FOOTER.png')"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
   <v-grid-container>
     
        <v-layout row wrap>
          <v-flex xs="12" md="4">
            <button class="mr-10 v-btn v-btn--small" @click="homepage">
              หน้าหลัก
            </button>
          </v-flex>
          <v-flex xs="12" md="4">
            <button class="mr-10 v-btn v-btn--small" @click="pressrelease">
              ข่าวประชาสัมพันธ์
            </button>
          </v-flex>
          <!-- <v-flex xs="12" md="4">
            <button class="mr-10 v-btn v-btn--small" @click="news">
              การอบรม
            </button>
          </v-flex> -->
          <v-flex xs="12" md="4">
            <button class="mr-10 v-btn v-btn--small" @click="about">
              เกี่ยวกับเรา
            </button>
          </v-flex>
        </v-layout>
       </v-grid-container>

      <v-btn width="130" depressed color="success" @click="login" v-if="!GET_LOGIN">
        เข้าสู่ระบบ | Login
      </v-btn>
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
    news() {
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
