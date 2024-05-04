<template>
  <div>
    <Navbarteacher />
    <v-col cols="12">
      <p class="display-1 text-center g-color mt-10">เพิ่มรายชื่อผู้ผ่านอบรม</p>
    </v-col>
    <v-container>
     
        
        <v-col cols="12" md="1" class="px-2">
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
      <v-row>
      <v-col cols="6" md="6" lg="6" class="px-2">
        <v-text-field
          class="mt-5"
          outlined
          label="ชื่อ"
          v-model="USERNAME"
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="6" lg="6" class="px-2">
        <v-text-field
          class="mt-5"
          outlined
          label="นามสกุล"
          v-model="LASTNAME"
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="6" lg="6" class="px-2">
        <v-text-field
          class="mt-5"
          outlined
          label="เบอร์โทรศัพท์"
          v-model="TEL"
        ></v-text-field>
      </v-col>
       <v-col cols="6" md="6" lg="6" class="px-2">
        <v-text-field
          class="mt-5"
          outlined
          label="เลขบัตรประชาชน"
          v-model="POSTNUMBER"
        ></v-text-field>
      </v-col>
       <v-col cols="12" class="">
          <v-btn color="green" block @click="confirm">ยืนยัน</v-btn>
        </v-col>
        </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
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
      LASTNAME:"",
      TEL: "",
      POSTNUMBER: "",
    };
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
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
