<template>
  <div >
    <NavbarAd />
  <v-card depressed color="light-green lighten-4 " class="mx-100"
            width="100%"
            elevation="8"
            rounded="xl"
  >
    <v-row>
         <v-col class="">
      <v-btn class="headline pa-7" width="100%" elevation="5" @click="goadminpage">
        <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลักแอดมิน
      </v-btn>
    </v-col>
    
      <v-col cols="12">
        manageSubject
      </v-col>
    </v-row>
    </v-card>
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
    return {};
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