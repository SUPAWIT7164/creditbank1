<template>
  <div class="">
    <NavbarAd />
    <v-container>
      <v-card>
        <v-card-title> เพิ่มข่าวประชาสัมพันธ์ </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="headerNews"
                outlined
                dense
                label="หัวข้อ"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="detailNews"
                outlined
                dense
                label="เนื้อหา"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="link"
                label="ลิงค์ข่าว"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input
                v-model="file"
                accept="image/*"
                @change="handleFile"
                label="ไฟล์รูปข่าว"
                outlined
                dense
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-btn @click="saveData">บันทึกข้อมูล</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <div class="">
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, error
          atque? Autem, suscipit velit odit quos magni veniam fugiat earum! -->
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import { mapMutations, mapActions } from "vuex";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {
      headerNews: "",
      detailNews: "",
      file: null,
      link: null,
    };
  },
  created() {
    this.SET_LOGIN(true);
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      addNew: "users/addNew",
    }),
    async saveData() {
      const data = new FormData();
      data.set("FILES", this.file);
      data.set("headerNews", this.headerNews);
      data.set("detailNews", this.detailNews);
      data.set("link", this.link);

      await this.addNew(data).then((res) => {
        // console.log(res);
      });
    },
    handleFile(e) {
      this.file = e;
    },
  },
};
</script>

<style>
</style>