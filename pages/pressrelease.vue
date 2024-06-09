<template>
  <div class="">
     <Navbar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">ข่าวประชาสัมพันธ์</h2>
        </v-col>
        <v-col cols="12">
          <v-card v-for="(item, index) in newsData" :key="index" class="mb-8" elevation="8" rounded="xl">
            <v-row class="px-5">
              <v-col cols="4">
                <v-img
                  :src="getBase64Image(item.base64File)"
                  width="100%"
                  height="150px"
                ></v-img>
              </v-col>
              <v-col cols="8">
                <div class="mb-2">
                  <h3>เรื่อง {{ item.headNews }}</h3>
                </div>
                <div class="mb-2">
                  <h4>{{ item.detailNews }}</h4>
                </div>
                <div class="mb-2">
                  <v-btn color="success">
                    <a :href="item.link" download="" target="_blank" class="text-color"
                      >รายละเอียด</a
                    >
                  </v-btn>
                </div>
                <div class=""></div>
              </v-col>
            </v-row>
          </v-card>
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
      newsData: [],
    };
  },
  methods: {
    ...mapActions({
      allNews: "users/allNews",
    }),
    async getNewsData() {
      this.newsData = await this.allNews();
      console.log(this.newsData);
    },
    getBase64Image(base64String) {
      return `data:image/jpeg;base64,${base64String}`;
    },
  },
  mounted() {
    this.getNewsData();
  },
};
</script>

<style scoped>
.text-color {
  color:  white !important;
  font-size: 15px !important;
  text-decoration-line: none !important;
}
</style>