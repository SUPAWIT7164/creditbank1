<template>
  <div class="">
    <navbarteacher />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-start">
          <h2 class="display-1 t-green text-center">หน้าเพิ่มกำหนดการอบรม</h2>
        </v-col>
        <v-col cols="12" class="text-start">
          <v-card
            class="py-10 text-center"
            width="100%"
            elevation="8"
            rounded="xl"
          >
            <v-text-field
              class="mt-1 mx-10"
              outlined
              label="เพิ่มห้วการอบรม"
              v-model="nameSubject"
            ></v-text-field>
          </v-card>
        </v-col>

        <!-- <v-col cols="12" class="text-start">
          <v-img :src="require('~/assets/ai.png')" width="100%" />
        </v-col> -->
        <v-col cols="12" class="text-start">
          <v-card
            class="py-10 text-center"
            width="100%"
            elevation="8"
            rounded="xl"
          >
            <v-text-field
              class="mt-1 mx-10"
              outlined
              label="เพิ่มข้อมูลรายวิชา"
              v-model="detailSub"
            >
            </v-text-field>
          </v-card>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-text-field
              type="date"
              outlined
              label="วัน/เดือน/ปี"
              v-model="date"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-text-field
              outlined
              label="กำหนดจำนวนผู้เรียน"
              v-model="totalStu"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-text-field
              type="time"
              outlined
              label="เวลาเริ่มอบรม"
              v-model="time"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="6" class=""> </v-col>
        <v-col cols="12" class="">
          <v-btn color="green" block @click="confirmSubject">ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nameSubject: null,
      detailSub: null,
      date: null,
      totalStu: null,
      time: null,
    };
  },
  methods: {
    ...mapActions({
      addSub: "users/addSub",
    }),
    confirmSubject() {
      this.addSub({
        NAMESUBJECT: this.nameSubject,
        DETAILSUBJECT: this.detailSub,
        DATE: this.date,
        TIME: this.time,
        TOTALSTU: this.totalStu,
        TEACHERNAME: "AJ.OTP EMAIL"
      })
        .then(() => {
          this.$swal({
            position: "center",
            icon: "success",
            title: "ลงทะเบียนสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res);
          this.nameSubject = null;
          this.detailSub = null;
          this.date = null;
          this.time = null;
          this.totalStu = null;

        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.t-green {
  color: green !important;
  font-weight: 700 !important;
}
</style>