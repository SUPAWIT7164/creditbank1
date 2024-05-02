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
            :rules="passwordRules"
            v-model="PASSWORD"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="">
          <v-row>
            <v-col cols="12" class="text-left">
              <a class="ml-4" @click="checkUser">ลืมรหัสผ่าน</a></v-col
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
import { db } from "../plugins/firebaseInit";
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  where,
} from "firebase/firestore";
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
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
  // watch: {
  //   citizenID(newVal) {
  //     if (newVal.length === 13) {
  //       this.citizenID =
  //         newVal.slice(0, 3) +
  //         "-" +
  //         newVal.slice(3, 6) +
  //         "-" +
  //         newVal.slice(6, 10) +
  //         "-" +
  //         newVal.slice(10, 12) +
  //         "-" +
  //         newVal.slice(12);
  //     }
  //   },
  // },
  methods: {
    ...mapMutations({
      SET_USER: "users/SET_USER",
    }),
    goHome() {
      this.$router.push("/");
      this.citizenID = "";
    }, 
    async checkUser() {
      // try {
      //   const querySnapshot = query(
      //     collection(db, "users"),
      //     where("USERNAME", "==", this.USERNAME),
      //     where("PASSWORD", "==", this.PASSWORD)
      //   );
      //   const dataUser = await getDocs(querySnapshot);

      //   dataUser.forEach((doc) => {
      //     console.log(doc.data());
      //     this.SET_USER(doc.data());
      //     this.userRole = doc.data().ROLE
      //   });

      //   if (!dataUser.empty && this.userRole === "admin") {
      //     console.log("พบข้อมูลผู้ใช้");
      //     this.$swal({
      //       position: "center",
      //       icon: "success",
      //       title: "เข้าสู่ระบบสำเร็จ",
      //       showConfirmButton: false,
      //       timer: 1500,
      //     });
      //     this.$router.push({ path: "/admin/adminpage" });
      //   } else if (!dataUser.empty && this.userRole === "user") {
      //     this.$swal({
      //       position: "center",
      //       icon: "success",
      //       title: "เข้าสู่ระบบสำเร็จ",
      //       showConfirmButton: false,
      //       timer: 1500,
      //     });
      //     this.$router.push({ path: "/users/userpage" });
      //   } else {
      //     this.$swal({
      //       icon: "warning",
      //       title: "ไม่พบข้อมูลผู้ใช้",
      //       text: "กรุณากรอกข้อมูลให้ถูกต้อง",
      //     });
      //     this.USERNAME = null;
      //     this.PASSWORD = null;
      //   }
      // } catch (error) {
      //   console.error("เกิดข้อผิดพลาดในการตรวจสอบผู้ใช้:", error);
      // }
        this.$router.push("/Teacher/teacherhome"); 
    },
    //   this.$router.push("/admin/adminpage"); 
    // },

    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped></style>
