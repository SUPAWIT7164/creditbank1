<template>
  <div id="bg-image" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <Navbaradmin />
    <v-row no-gutters>
      <v-col class="">
        <v-btn class="headline pa-7" width="100%" elevation="5" @click="goHome">
          <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลัก
        </v-btn>
      </v-col>
    </v-row>
    <v-container class="d-flex justify-center">
      <v-card max-width="800px" class="mt-10" elevation="8">
        <v-card-title class="ml-2 justify-center display-1"
          >ลงทะเบียนอาจารย์ผู้สอน
        </v-card-title>
        <v-card-text class="pb-0">
          <v-form ref="formReg">
            <v-row no-gutters>
              <v-col cols="12">
                <p class="mx-2 title">ชื่อภาษาไทย</p>
              </v-col>
              <v-col cols="12" md="2" class="px-2">
                <v-select
                  v-model="titleName"
                  outlined
                  :items="titleList"
                  item-text="name"
                  item-value="name"
                  label="คำนำหน้า"
                  :rules="[(v) => !!v || 'กรอกคำนำหน้าให้ถูกต้อง']"
                ></v-select>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="ชื่อ"
                  v-model="FIRSTNAME"
                  :rules="[(v) => !!v || 'กรอกชื่อให้ถูกต้อง']"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="นามสกุล"
                  v-model="LASTNAME"
                  :rules="[(v) => !!v || 'กรอกนามสกุลให้ถูกต้อง']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <p class="mx-2 title">ชื่อภาษาอังกฤษ</p>
              </v-col>
              <v-col cols="12" md="2" class="px-2">
                <v-select
                  v-model="titleNameEng"
                  outlined
                  :items="titleListEng"
                  item-text="name"
                  item-value="name"
                  label="คำนำหน้า"
                  :rules="[(v) => !!v || 'กรอกคำนำหน้าให้ถูกต้อง']"
                ></v-select>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="ชื่อ"
                  v-model="FIRSTNAMEENG"
                  :rules="[
                    (v) => !!v || 'กรอกนามสกุลให้ถูกต้อง',
                    (v) =>
                      !/[\u0E00-\u0E7F]/.test(v) ||
                      'กรุณากรอกชื่อเป็นภาษาอังกฤษเท่านั้น',
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="นามสกุล"
                  v-model="LASTNAMEENG"
                  :rules="[
                    (v) => !!v || 'กรอกนามสกุลให้ถูกต้อง',
                    (v) =>
                      !/[\u0E00-\u0E7F]/.test(v) ||
                      'กรุณากรอกนามสกุลเป็นภาษาอังกฤษเท่านั้น',
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="px-2">
                <v-select
                  outlined
                  label="สถานะ"
                  :items="levelClass"
                  item-text="name"
                  item-value="name"
                  v-model="levelC"
                  :rules="[(v) => !!v || 'กรุณาใส่สถานะ']"
                ></v-select>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="อีเมล"
                  v-model="EMAIL"
                  :rules="[(v) => /.+@.+\..+/.test(v) || 'กรุณากรอกอีเมล']"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="เบอร์โทรศัพท์"
                  v-model="TEL"
                  :rules="[(v) => !!v || 'กรุณากรอกเบอร์โทรศัพท์']"
                ></v-text-field>
              </v-col>
              <!-- <v-col cols="12" md="12" class="px-2">
                <v-text-field
                  outlined
                  label="ชื่อสถานที่ทำงาน / สถานศึกษา*"
                  v-model="SCHOOL"
                  :rules="[(v) => !!v || 'กรุณากรอกสถานที่ทำงานหรือสถานศึกษา']"
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" md="12" class="px-2">
                <v-text-field
                  outlined
                  label="ชื่อผู้ใช้ / Username*"
                  v-model="USERNAME"
                  :rules="[
                    (v) => !!v || 'กรุณากรอกชื่อผู้ใช้ให้ถูกต้อง',
                    (v) =>
                      (v && v.length >= 6) || 'ชื่อผู้ใช้ต้องมีอย่างน้อย 6 ตัว',
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="px-2">
                <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'PASSWORD'"
                  name="input-10-1"
                  label="รหัสผ่าน"
                  outlined
                  @click:append="show1 = !show1"
                  v-model="PASSWORD"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="px-2">
                <v-text-field
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  label="ยืนยันรหัสผ่าน"
                  :type="show2 ? 'text' : 'PASSWORD'"
                  outlined
                  :rules="[confirmPasswordRule]"
                  :error-messages="confirmPasswordError"
                  v-model="CPASSWORD"
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>
              <!-- <v-col cols="12" class="px-2">
                <p class="title">
                  กรุณาแนบไฟล์รูปภาพ (upload file) บัตรประชาชนเป็น file PNG,JPEG
                  เท่านั้น
                </p>
                <v-file-input
                  outlined
                  label="สำเนาบัตรประชาชน"
                  v-model="file"
                  @change="onFileChange"
                  :rules="[(v) => !!v || 'กรุณาแนบสำเนาบัตรประชาชน']"
                ></v-file-input>
                <div style="font-family: 'Thai sarabun', sans-serif">
                  {{ this.textDD }}
                </div>
              </v-col> -->
              <!-- <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="เลขบัตรประจำตัวประชาชน"
                  v-model="IDCard"
                  :max="13"
                  :rules="[(v) => !!v || 'กรุณากรอกเลขบัตรประจำตัวประชาชน']"
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" class="px-2">
                <v-btn
                  width="100%"
                  height="45px"
                  color="primary"
                  class="mb-7"
                  @click="register"
                >
                  บันทึกข้อมูล
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import backgroundUrl from "~/assets/pile-books-bookstore.jpg";
//import { db } from "../plugins/firebaseInit";
//import { collection, addDoc, getDocs, query, doc } from "firebase/firestore";
//import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Tesseract from "tesseract.js";

export default {
  data() {
    return {
      rules: {
        required: (v) =>
          /^[a-zA-Z0-9]+$/.test(v) ||
          "รหัสผ่านต้องมีเฉพาะภาษาอังกฤษและตัวเลขเท่านั้นและไม่มีการเว้นวรรค",
        min: (v) => (v && v.length >= 6) || "ชื่อผู้ใช้ต้องมีอย่างน้อย 6 ตัว",
      },
      show1: false,
      show2: false,
      buttonDisabled: false,
      backgroundUrl,
      titleName: null,
      titleNameEng: null,
      titleList: [
        {
          name: "อาจารย์",
        },
        {
          name: "ดร.",
        },
        {
          name: "ผศ.",
        },
           {
          name: "รศ.",
        },
             {
          name: "ศ.",
        },
      ],
      titleListEng: [
        {
          name: "Mr.",
        },
         {
          name: "Miss.",
        },
        {
          name: "Dr.",
        },
        {
          name: "Asst.",
        },
         {
          name: "Prof.",
        },
        

      ],
      FIRSTNAME: "",
      LASTNAME: "",
      FIRSTNAMEENG: null,
      LASTNAMEENG: "",
      USERNAME: null,
      PASSWORD: null,
      CPASSWORD: null,
      levelClass: [
        {
          id: 1,
          name: "อาจารย์",
        },
     
      ],
      levelC: "",
      EMAIL: "",
      TEL: "",
      // SCHOOL: "",
      file: null,
      files: [],
      // subjectList: [
      //   {
      //     id: 1,
      //     subject: "วิชาการเขียนโปรแกรมเบื้องต้น สาขาวิทยาการคอมพิวเตอร์",
      //     time: "วันเสาร์ ที่ 1 เมษายน 13.00 น.-15.00 น.",
      //   },
      // ],
      subject: "",
      subjectTime: "",
      comment: "",
      listData: [],
      listarray: [],
      isIdCard: false,
      IDCard: null,
      textDD: "",
      storageRefG: null,
    };
  },
  created() {
    this.buttonDisabled = true;
  },
  computed: {
    confirmPasswordError() {
      if (this.CPASSWORD !== "" && this.CPASSWORD !== this.PASSWORD) {
        return ["รหัสผ่านไม่ตรงกัน"];
      }
      return [];
    },
  },
  watch: {
    LASTNAMEENG(value) {
      // Capitalize the firrst letter of the input
      this.LASTNAMEENG = this.capitalizeFirstLetter(value);
    },
    FIRSTNAMEENG(value) {
      // Capitalize the firrst letter of the input
      this.FIRSTNAMEENG = this.capitalizeFirstLetter(value);
    },
  },
  methods: {
    ...mapMutations({
      LOADER: "users/SET_LOADER",
    }),
    ...mapActions({
      regisTea: "users/registerTea",
    }),
    confirmPasswordRule(value) {
      if (value !== this.PASSWORD) {
        return "รหัสผ่านไม่ตรงกัน";
      }
      return true;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async onFileChange(event) {
      this.buttonDisabled = true;
      this.file = event;
      this.LOADER(true);
      const {
        data: { text },
      } = await Tesseract.recognize(this.file, "eng", {
        logger: (m) => {
          console.log(m);
        },
      });
      const firstNameRegex = new RegExp(this.FIRSTNAMEENG, "g");
      const lastNameRegex = new RegExp(this.LASTNAMEENG, "g");

      const isFirstNameMatch = text.match(firstNameRegex);
      const isLastNameMatch = text.match(lastNameRegex);

      if (
        isFirstNameMatch &&
        isLastNameMatch &&
        isFirstNameMatch.length === isLastNameMatch.length
      ) {
        // แสดงข้อความ "สามารถใช้รูปภาพนี้ได้"
        //const storage = getStorage();
        const file = this.file; // อ้างอิงไฟล์จาก input
        const fileName = `${file.name}`; // ตั้งชื่อไฟล์ใหม่
        //const storageRef = ref(storage, `images/${fileName}`); // ระบุตำแหน่งเก็บใน Firebase Storage
        // this.storageRefG = storageRef;
        // uploadBytes(this.storageRefG, file).then((snapshot) => {
        //  console.log("Uploaded a blob or file!");
        //});
        this.$swal({
          position: "center",
          icon: "success",
          title: "สามารถใช้รูปภาพนี้ได้",
          showConfirmButton: false,
          timer: 1500,
        });
        this.buttonDisabled = false;
      } else {
        // แสดงข้อความ "ไม่สามารถใช้รูปภาพนี้ได้"
        this.$swal({
          icon: "warning",
          title: "ไม่สามารถใช้รูปภาพนี้ได้",
        });
        this.file = null;
        this.buttonDisabled = true;
      }
    },
    async register() {
      this.buttonDisabled = true;
      if (!this.$refs.formReg.validate()) {
        this.$swal({
          icon: "warning",
          title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        });
      } else {
        this.regisTea({
          Title: this.titleName,
          Name: this.FIRSTNAME,
          Lastname: this.LASTNAME,
          Titleeng: this.titleNameEng,
          Nameeng: this.FIRSTNAMEENG,
          Lastnameeng: this.LASTNAMEENG,
          // Levelc: this.levelC,
          // IDCard: this.IDCard,
          Username: this.USERNAME,
          Password: this.PASSWORD,
          Tel: this.TEL,
          // FILE: this.file,
          Email: this.EMAIL,
        })
          .then(() => {
            this.$swal({
              position: "center",
              icon: "success",
              title: "ลงทะเบียนสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.replace({ path: "/login" });
          })
          .catch((e) => {
            console.log(e);
          });

        this.LOADER(false);
        // this.$router.replace({ path: "/login" });
      }
    },
    goHome() {
      this.$router.push("/admin/adminapprove");
      this.citizenID = "";
    },
  },
};
</script>

<style scoped>
#bg-image {
  background-size: cover !important; /* ปรับขนาดรูปให้เต็มพื้นที่ */
  background-position: center !important; /* จัดตำแหน่งภาพให้อยู่ตรงกลาง */
  height: 100%;
}
</style>
