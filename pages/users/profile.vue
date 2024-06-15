<template>
  <div id="bg-index">
    <navbaruser />
    <v-row no-gutters class="mt-5">
      <v-col class="mx-2">
        <v-row>
          <v-col cols="12">
            <p class="display-1 text-center g-color">ข้อมูลส่วนตัว</p>
          </v-col>
          <v-col cols="12">
            <div class="mx-15">
              <v-row v-for="(item, index) in regisData" :key="index">
                <v-col cols="12"
                  ><div class="block-d-1 text-center">
                    ข้อมูลผู้เรียน
                  </div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ชื่อ :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">
                    {{ item.Title }} {{ item.Name }} {{ item.Lastname }}
                  </div></v-col
                >
                <v-col cols="3" class="pa-2"
                  ><div class="block-d-1">ชื่ออังกฤษ :</div></v-col
                >
                <v-col cols="9" class="pa-2"
                  ><div class="block-d">
                    {{ item.Titleeng }} {{ item.Nameeng }}
                    {{ item.Lastnameeng }}
                  </div></v-col
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
                <v-col cols="12"
                  ><div class="block-d-1 text-center">
                    ประวัติการเรียน
                  </div></v-col
                >
                <v-col cols="12" v-for="(item, i) in passC" :key="i">
                  <v-row no-gutters>
                    <v-col cols="3"><div class="block-d-1">วิชา :</div></v-col>
                    <v-col cols="9" class="block-d"
                      ><span class="" @click="gotoDetail(item.SUBJECT)">
                        {{ item.SUBJECT }}
                      </span>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn @click="genPass()">ใบรับรอง</v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import navbar from '../../components/navbar.vue';
import { mapMutations, mapActions, mapGetters } from "vuex";
import Navbaruser from "../../components/navbaruser.vue";
export default {
  components: { Navbaruser },
  component: {
    Navbaruser,
  },
  data() {
    return {
      regisData: [],
      IDCARD: "1111111111111",
      passC: [],
    };
  },
  computed: {
    ...mapGetters({
      GET_USER: "users/GET_USER",
    }),
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
      SET_SJ: "users/SET_SJ",
    }),
    ...mapActions({
      registerUser: "users/registerData",
      handleSelectConfirm: "users/handleSelectConfirm",
      handleExpdf: "users/handleExpdf",
    }),
    async registerData() {
      this.regisData = await this.GET_USER;
      console.log(this.regisData);
    },
    async confirmSub() {
      this.passC = await this.handleSelectConfirm({ IDCARD: this.IDCARD });
      console.log(this.passC);
    },
    async genPass() {
      await this.handleExpdf({ data: this.IDCARD }).then(async (res) => {
        const { file, name } = res;
        console.log(file);
        if ((res.statusCode = "ok")) {
          const binaryString = window.atob(file);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          const pdfBlob = new Blob([bytes], { type: "application/pdf" });
          const pdfUrl = window.URL.createObjectURL(pdfBlob);
          const downloadLink = document.createElement("a");
          downloadLink.href = pdfUrl;
          downloadLink.download = name + ".pdf";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          setTimeout(() => {
            window.URL.revokeObjectURL(pdfUrl);
            document.body.removeChild(downloadLink);
          }, 100);
        } else {
          console.error("error");
        }
      });
      this.$swal({
        title: "รายการสำเร็จ",
        icon: "success",
        showCancelButton: false,
        timer: 2000,
      });
    },
    gotoDetail(sj) {
      this.SET_SJ(sj);
      this.$router.push("/showSubjectDetail");
    },
  },
  mounted() {
    this.registerData();
    this.confirmSub();
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
