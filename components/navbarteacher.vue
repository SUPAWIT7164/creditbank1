<template>
  <div class="">
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
      <div class="">
        <button class="mr-10" @click="teacherhome">หน้าหลัก</button>
        <button class="mr-10" @click="addPost">เพิ่มกำหนดการอบรม</button>
        <button class="mr-10" @click="addpeople">
          เพิ่มรายชื่อผู้ผ่านเกณฑ์
        </button>
      </div>
      <v-menu
        bottom
        min-width="100px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="42"
            >
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
               <v-avatar>
             <img
        src="https://cdn.vuetifyjs.com/images/john.jpg">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click="profiletea"
              >
                ข้อมูลผู้ใช้
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                 @click="exit"
              >
                ออกจากระบบ
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
      <!-- <v-btn depressed color="success" @click="login"
        >เข้าสู่ระบบ | Log in</v-btn
      > -->
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbarteacher",
   data: () => ({
      user: {
        initials: 'AD',
        fullName: 'Apinphorn Dangmai',
        email: 'apinphorn@gmail.com',
      },
    }),
  computed: {
    ...mapGetters({
      GET_LOGIN: "users/GET_LOGIN",
    }),
  },
  methods: {
    teacherhome() {
      this.$router.push("/Teacher/teacherhome");
    },
    addPost() {
      this.$router.push("/Teacher/addPost");
    },
    addpeople() {
      this.$router.push("/Teacher/addpeople");
    },
    login() {
      this.$router.push("/login");
    },
     profiletea(){
    this.$router.push("/Teacher/teacherDetail");
    },
    exit(){
  this.$swal({
      title: "ออกจากระบบ",
          text: `กรุณากดปุ่ม "ยีนยัน" เพื่อออกจากระบบ`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
       if (result.value) {
            localStorage.clear();
      this.$router.push("/");
        } 
   });
    },
  },
};
</script>
