<template>
  <div class="">
    <navbar />
    <v-row no-gutters class="mt-5">
      <v-col class="mx-2">
        <v-row>
          <v-col cols="12">
            <p class="display-1 text-center g-color">ข้อมูลส่วนตัว</p>
          </v-col>
          <v-col cols="12">
            <div class="mx-15">
              <v-row class="">
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">เลขที่บัตรประชาชน</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">15000000000</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ชื่อ :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">นางสาว สันหพร หว่างไม</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ชื่ออังกฤษ :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">Ms. sanhaphorn wangmai</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">เบอร์ติดต่อ:</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">088888888</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">Email</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">Sanhaphorn@Email.com</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ตำแหน่ง</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">นักศึกษา</div></v-col
                >
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
export default {
  components: { navbar },
  component: {
    navbar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.g-color {
  color: rgb(25, 215, 25);
  font-weight: 700;
  font-size: 40px !important;
}
.block-d-1 {
  background-color: rgb(0, 237, 103) !important;
  height: 50px !important;
}
.block-d {
  background-color: rgb(147, 244, 163) !important;
  height: 50px !important;
}
</style>