<template>
  <div class="">
    <navbarteacher />
    <v-row no-gutters class="mt-5">
      <v-col class="mx-2">
        <v-row>
          <v-col cols="12">
            <p class="display-1 text-center g-color">ข้อมูลส่วนตัว</p>
          </v-col>
          <v-col cols="12">
            <div class="mx-15">
              <v-row v-for="(item, index) in regisData" :key="index">
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ชื่อ-สกุล :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">   {{ item.Title }} {{ item.Name }} {{ item.Lastname }} </div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ชื่ออังกฤษ :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">  {{ item.Titleeng }} {{ item.Nameeng }} {{ item.Lastnameeng }} </div></v-col
                >
                  <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">เลขที่บัตรประชาชน :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">{{ item.IDCard }}</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">เบอร์ติดต่อ:</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">{{ item.Tel }}</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">Email</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">{{ item.Email }}</div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ตำแหน่ง</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">{{ item.Role }}</div></v-col
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
import { mapMutations, mapActions, mapGetters } from "vuex";
import navbarteacher from "../../components/navbarteacher.vue";
export default {
  component: {
    navbarteacher,
  },
  data() {
    return {
      regisData: [

      ],
    };
  },
  computed: {
    ...mapGetters({
      GET_USER: 'users/GET_USER',
    }),
  },
  methods: {  
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      registerUser: "users/registerData"
    }),
    async registerData() {
      this.regisData = await this.GET_USER;
      console.log(this.regisData);
    },
  },
  mounted() {
    this.registerData();
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