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
        <button class="mr-10" @click="userhomepage">หน้าหลัก</button>
        <button class="mr-10" @click="userpress">ข่าวประชาสัมพันธ์</button>
        <button class="mr-10" @click="usernews">การอบรม</button>
        <button class="mr-10" @click="userabout">เกี่ยวกับเรา</button>
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
              size="35"
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
                @click="profile"
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
   

      <!-- <v-btn depressed color="success" @click="login" v-if="!GET_LOGIN"
        >เข้าสู่ระบบ | Log in</v-btn
      > -->
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbaruser",
   data: () => ({
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
    }),
  computed: {
    ...mapGetters({
      GET_LOGIN: "users/GET_LOGIN",
    }),
  },
  methods: {
    userhomepage() {
      this.$router.push("/users/userpage");
    },
    userpress() {
      this.$router.push("/users/pressreleaseuser");
    },
    usernews() {
      this.$router.push("/users/news");
    },
    userabout() {
      this.$router.push("/users/aboutuser");
    },
    login() {
      this.$router.push("/login");
    },
    profile(){
    this.$router.push("/users/profile");
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

<style></style>
