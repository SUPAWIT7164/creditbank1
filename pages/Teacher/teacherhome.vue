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
          <v-row class="px-5 py-5" no-gutters>
            <v-col cols="12">
              <p class="title tX-color">
                ชื่อวิชา: {{ item.NAMESUBJECT }}
              </p></v-col
            >
            <v-col cols="12"
              ><p class="title tX-color">
                อาจารย์ผู้สอน: {{ item.TEACHERNAME }}
              </p>
            </v-col>
            <v-col cols="12"
              ><p class="title tX-color">วันที่: {{ item.DATE }}</p>
            </v-col>
            <v-col cols="12"
              ><p class="title tX-color">เวลา: {{ item.TIME }}</p>
            </v-col>
            <v-col cols="12"
              ><p class="title tX-color">
                จำนวนผู้ลงสมัครอบรม: {{ item.TOTALSTU }}
              </p>
            </v-col>
          </v-row>
               <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    ข้อมูลรายวิชา
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ item.DETAILSUBJECT }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
