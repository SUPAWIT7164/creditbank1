<template>
  <div>
    <Navbarteacher />
    <v-col cols="12">
      <p class="display-1 text-center g-color mt-10">เพิ่มรายชื่อผู้ผ่านอบรม</p>
    </v-col>
    <v-container>
      <v-row>
        <v-col cols="2" md="2" lg="2" class="px-2">
          <v-select
            v-model="TITLENAME"
            outlined
            :items="titleList"
            item-text="name"
            item-value="name"
            label="คำนำหน้า"
            :rules="[(v) => !!v || 'กรอกคำนำหน้าให้ถูกต้อง']"
          ></v-select>
        </v-col>
        <v-col cols="5" md="5" lg="5" class="px-2">
          <v-text-field
            class=""
            outlined
            label="ชื่อ"
            v-model="USERNAME"
             :rules="[(v) => !!v || 'กรอกชื่อให้ถูกต้อง']"
          ></v-text-field>
        </v-col>
        <v-col cols="5" md="5" lg="5" class="px-2">
          <v-text-field
            class=""
            outlined
            label="นามสกุล"
            v-model="LASTNAME"
             :rules="[(v) => !!v || 'กรอกนามสกุลให้ถูกต้อง']"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="6" lg="6" class="px-2">
          <v-text-field
            class=""
            outlined
            label="เลขบัตรประชาชน"
            v-model="IDCARD"
             :rules="[(v) => !!v || 'กรอกเลขบัตรประชาชนให้ถูกต้อง']"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="6" lg="6" class="px-2">
          <v-select
            outlined
            label="รายชื่อวิชาที่ผ่าน"
            :items="SUBJECTLIST"
            item-text="NAMESUBJECT"
            item-value="NAMESUBJECT"
            v-model="SUBJECT"

          ></v-select>
        </v-col>

        <v-col cols="12" class="">
          <v-btn color="green" block @click="confirm">ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      SUBJECT: null,
      SUBJECTLIST: null,
      titleList: [
        {
          name: "นาย",
        },
        {
          name: "นางสาว",
        },
      ],
      TITLENAME: "",
      USERNAME: "",
      LASTNAME: "",
      IDCARD: "",
    };
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      selectSByAj: "users/selectSByAj",
      addPeoplePass: "users/addPeoplePass",
    }),
    async listSubject() {
      this.SUBJECTLIST = await this.selectSByAj();
      console.log(this.SUBJECTLIST);
    },
    confirm() {
      console.log(this.SUBJECT);
      this.$swal({
        title: "ต้องการยืนยันหรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.addPeoplePass({
            TITLENAME: this.TITLENAME,
            USERNAME: this.USERNAME,
            LASTNAME: this.LASTNAME,
            IDCARD: this.IDCARD,
            SUBJECTS: this.SUBJECT,
          });
          this.TITLENAME = null
          this.USERNAME = null
          this.LASTNAME = null
          this.IDCARD = null
          this.SUBJECT = null
          this.$swal({
            title: "ยืนยันสำเร็จ",
            icon: "success",
            showCancelButton: false,
          });
        } else {
          console.log("error");
        }
      });
    },
  },
  mounted() {
    this.listSubject();
  },
};
</script>

<style scoped>
.g-color {
  color: rgb(25, 215, 25);
  font-weight: 700;
  font-size: 40px !important;
}
</style>
