<template>
  <div class="">
    <NavbarAd />
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
              label="เพิ่มหัวการอบรม"
              v-model="nameSubject"
              :rules="[(v) => !!v || 'กรุณากรอกหัวการอบรม']"
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
              :rules="[(v) => !!v || 'กรุณากรอกข้อมูลรายวิชา']"
            >
            </v-text-field>
          </v-card>
        </v-col>
          <v-col cols="12" class="text-start">
         <v-card
            class="py-10 text-center"
            width="100%"
            elevation="8"
            rounded="xl"
          >
            <div>
    <form @submit.prevent="uploadFile">
      <input type="file" @change="handleFileUpload" />
      <button type="submit">Upload</button>
    </form>
  </div>
           </v-card>
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
              label="เพิ่มหัวข้อย่อยรายวิชา"
              v-model="detailSub"
              :rules="[(v) => !!v || 'กรุณากรอกหัวข้อย่อยรายวิชา']"
            >
            </v-text-field>
          </v-card>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-text-field
              type="date"
              outlined
              label="เดือน/วัน/ปี"
              v-model="date"
              :rules="[(v) => !!v || 'กรุณากรอก เดือน/วัน/ปี']"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="6" class=""> </v-col>
        <v-col cols="4" class="mx-auto">
          <v-btn color="green" block @click="confirmNews">ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import { mapMutations } from "vuex";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {
      ID: null,
      PATH: null,
      HEADNEWS: null,
      SUBNEWS: null,
      NEWSDETAIL: null,
      UPLOADTIME: null,
    };
  },
  created() {
    this.SET_LOGIN(true);
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
     goadminpage() {
      this.$router.push("/admin/adminpage");
      this.citizenID = "";
    }, 
  },
};
</script>

<style>
</style>