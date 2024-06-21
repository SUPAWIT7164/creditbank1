<template>
  <div class="">
    <Navbaruser />
    <p class="display-2 text-center mt-10">การอบรมที่ผ่านมา</p>
    <v-col cols="12">
      <v-card
        color="#D4FFCA"
        width="auto"
        class="mx-10 mt-10"
        rounded="xl"
        v-for="(item, index) in cerData"
        :key="index"
      >
        <v-card-text>
          <h2>ผ่านการอบรมในหลักสูตร {{ item.SUBJECT }}</h2>
          <br />
          {{ item.TITLENAME + " " + item.USERNAME + " " + item.LASTNAME }}
        </v-card-text>
        <v-btn class="mx-5 mb-5"
          depressed
          color="amber lighten-2"
          @click="dowloadPdf(item, index)"
          >Certificate</v-btn
        >
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      cerData: [],
      idCard: ""
    };
  },
   computed: {
    ...mapGetters({
      GET_USER: "users/GET_USER",
    }),
  },
  mounted() {
    this.listCer();
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    ...mapActions({
      byIdCard: "users/byIdCard",
      printPdf: "users/genCer",
    }),
    goHistory() {
      this.$router.push("/history");
    },
    async listCer() {
      this.idCard = this.GET_USER[0].IDCard;
      this.cerData = await this.byIdCard({
        IDCARD: this.idCard,
      });
      console.log(this.cerData);
    },
    async dowloadPdf(item) {
      // this.LOADER(true);
      console.log(item);
      const sname = item.SUBJECTNAME;
      await this.printPdf({ data: item }).then(async (res) => {
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
      // this.LOADER(false);
    },
  },
};
</script>

<style></style>
