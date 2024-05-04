<template>
  <div id="bg-index">
    <navbarteacher />
    <v-row class="mx-2">
      <v-col cols="12">
        <v-img :src="require('~/assets/news.png')" class="mt-5">
          <v-img
            max-height="90"
            max-width="90"
            class="ml-10 mt-10"
            :src="require('~/assets/mju_logo.png')"
          >
          </v-img>
          <p class="display-2 text-center t-color">
            ยินดีต้อนรับเข้าสู่ ธนาคารหน่วยกิต
          </p>
        </v-img>
      </v-col>
      <v-col cols="12">
        <h2 class="tX-color">โพสต์ของผู้จัดการอบรม</h2>
      </v-col>
      <v-col cols="12">
        <hr />
      </v-col>
      <v-col cols="12">
        <v-card
          color="#2AF162"
          width="auto"
          class="mx-10 mt-10"
          rounded="xl"
          v-for="(item, index) in postData"
          :key="index"
        >
          <v-row class="py-5">
            <v-col cols="5" class="my-auto">
              <v-card class="mx-3" rounded="lg">
                <v-img :src="item.pic" width="auto" />
              </v-card>
            </v-col>
            <v-col cols="7">
              <v-row>
                <v-col cols="12">
                  <p class="title tX-color">ชื่อ: {{ item.name }}</p></v-col
                >
                <v-col cols="12"
                  ><p class="title tX-color">วันที่: {{ item.date }}</p>
                </v-col>
                <v-col cols="12"
                  ><p class="title tX-color">เวลา: {{ item.time }}</p>
                </v-col>
                <v-col cols="12"
                  ><p class="title tX-color">
                    จำนวนผู้ลงสมัครอบรบ: {{ item.total }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" class="mb-5">
        <hr />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import navbarteacher from "../../components/navbarteacher.vue";
export default {
  component: {
    navbarteacher,
  },
  data() {
    return {
      postData: [],
    };
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      listSub: "users/showPopSub",
    }),
    async showPopData() {
      this.postData = await this.listSub();
      console.log(this.postData);
    },
  },
  mounted() {
    this.showPopData();
  },
};
</script>
<style>
.theme--light.v-application {
  background-color: rgb(86, 83, 83) !important;
}
.t-color {
  color: black !important;
}
.tX-color {
  color: white !important;
}
</style>
