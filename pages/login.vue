<template>
  <v-row class="text-center">
    <v-col class="">
      <v-btn class="headline pa-7" width="100%" elevation="5" @click="goHome">
        <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลัก
      </v-btn>
    </v-col>
    <v-col cols="12" class="mt-8">
      <p class="display-2 text-center">เข้าสู่ระบบ</p>
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
            label="ชื่อผู้ใช้"
            v-model="USERNAME"
            maxlength="13"
          ></v-text-field>

          <v-text-field
            class="mt-4"
            outlined
            label="รหัสผ่าน"
            placeholder=""
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            v-model="PASSWORD"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="">
          <v-row>
            <v-col cols="12" class="text-left">
              <a class="ml-4" @click="goForgot">ลืมรหัสผ่าน</a></v-col
            >
            <v-col cols="6" class="text-left">
              <v-btn class="mb-7 rounded-md" color="success" @click="checkUser"
                ><v-icon>mdi mdi-import</v-icon>เข้าสู่ระบบ</v-btn
              ></v-col
            >
            <v-col cols="6" class="text-right">
              <v-btn class="mb-7 rounded-md" color="success" @click="goRegister"
                ><v-icon>mdi mdi-import</v-icon>สมัครผู้ใช้</v-btn
              ></v-col
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      show1: false,
      passwordRules: [
        (v) => !!v || "กรุณากรอกรหัสผ่าน",
        (v) => (v && v.length >= 6) || "กรุณากรอกรหัสผ่าน",
        (v) =>
          !/[\u0E00-\u0E7F]/.test(v) ||
          "กรุณากรอกรหัสผ่านเป็นภาษาอังกฤษเท่านั้น",
      ],
      citizenID: "",
      checkCitizenId: "",
      PASSWORD: null,
      checkpassId: "",
      USERNAME: null,
      userRole: null,
    };
  },
  methods: {
    ...mapMutations({
      SET_USER: "users/SET_USER",
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      Checkuse: "users/Logincheck",
    }),
    goForgot(){
    this.$router.push("/forgot");
    },
    goHome() {
      this.$router.push("/");
      this.citizenID = "";
    },
    goRegister() {
      this.$router.push("/register");
    },
    // async registerData() {
    //   this.regisData = await this.registerUser;
    // },
    async checkUser() {
      this.Checkuse({
        USERNAME: this.USERNAME,
        PASSWORD: this.PASSWORD,
      }).then((res) => {
        this.SET_USER(res);
        console.log(res);
        if (res[0].Role == "user") {
          console.log("a");
          this.SET_LOGIN(true)
          this.$router.push("/users/userpage");
        } else if (res[0].Role == "teacher") {
          this.$router.push("/Teacher/teacherhome");
        } else if (res[0].Role == "admin") {
          this.$router.push("/admin/adminapprove");
        }else{
          this.$router.push("/admin/adminapprove");
        }
        
      })
      .catch((error) => {
        this.$swal({
          title: "เกิดข้อผิดพลาด",
          text: `กรุณาตรวจสอบรหัสผ่านให้ถูกต้อง`,
          icon: "warning",
        })
      });
    },
  },
  mounted() {
    // this.registerData();
  },
};
</script>

<style scoped></style>
