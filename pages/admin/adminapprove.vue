<template>
  <div class="">
    <NavbarAd />
    <v-card depressed color="light-green lighten-4 ">
      <v-row>
        <v-col class="">
          <v-btn
            class="headline pa-7"
            width="100%"
            elevation="5"
            @click="goadminpage"
          >
            <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลักแอดมิน
          </v-btn>
        </v-col>

        <v-col cols="12">
          <h2 class="display-1 text-center">รายชื่อผู้ขอเปิดสิทธิ์สร้างโพส</h2>
        </v-col>

        <v-card
          class="py-10 mx-7 mb-5"
          width="100%"
          elevation="8"
          rounded="xl"
          v-for="(item, admin) in post"
          :key="admin"
        >
          <v-row no-gutters>
            <v-col cols="6" class="pl-10">
              <p class="title tX-color">ชื่ออาจารย์: {{ item.TEACHERNAME }}</p>
              <p class="title tX-color">ชื่อวิชา: {{ item.NAMESUBJECT }}</p>
              <p class="title mr-10">รายละเอียด: {{ item.DETAILSUBJECT }}</p>
              <p class="title tX-color">เวลาเริ่มอบรม: {{ item.TIME }}</p>
              <p class="title tX-color">วันที่อบรม: {{ item.DATE }}</p>
              <p class="title tX-color">จำนวน : {{ item.TOTALSTU }} คน</p>
            </v-col>
            <v-col cols="6" class="d-flex align-center justify-center">
              <v-btn
                class="mr-5"
                depressed
                color="success"
                @click="approveBtn(item)"
                >ยืนยัน</v-btn
              >
              <v-btn
                class="ml-5"
                depressed
                color="red darken-2"
                @click="cancelBtn(item)"
                >ปฏิเสธ</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import NavbarAd from "../../components/navbaradmin";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {
      post: [],
    };
  },
  created() {
    this.SET_LOGIN(true);
  },
  async mounted() {
    this.listSubjectData();
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      listSub: "users/listSub",
      approveSub: "users/approveSub",
      cancelSub: "users/cancelSub",
    }),
    goadminpage() {
      this.$router.push("/admin/adminpage");
      this.citizenID = "";
    },
    async listSubjectData() {
      this.post = await this.listSub();
      console.log(this.post);
    },
    approveBtn(item) {
      this.$swal({
        title: "ต้องการยืนยันรายวิชานี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.approveSub({
            ID: item.ID,
          });
          await this.listSubjectData();
          this.$swal({
            title: "แก้ไขรายการสำเร็จ",
            icon: "success",
            showCancelButton: false,
          });
        } else {
          console.log("error");
        }
      });
    },
    cancelBtn(item) {
      this.$swal({
        title: "ต้องการยกเลิกรายวิชานี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.cancelSub({
            ID: item.ID,
          });
          await this.listSubjectData();
          this.$swal({
            title: "แก้ไขรายการสำเร็จ",
            icon: "success",
            showCancelButton: false,
          });
        } else {
          console.log("error");
        }
      });
    },
  },
};
</script>

<style scoped></style>
