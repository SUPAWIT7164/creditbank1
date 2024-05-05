<template>
  <div class="">
    <Navbar />
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
          <h2>วิชาที่ได้รับเกียรติบัตรวิชา {{ item.SUBJECT }}</h2>
          <br />
          {{ item.TITLENAME + " " + item.USERNAME + " " + item.LASTNAME }}
        </v-card-text>
        <v-btn @click="dowloadPdf(item, index)">ดาวโหลด Certificate</v-btn>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      cerData: [],
      idCard: "1111111111111",
    };
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
      this.cerData = await this.byIdCard({
        IDCARD: this.idCard,
      });
      console.log(this.cerData);
    },
    async dowloadPdf(item) {
      // this.LOADER(true);
      console.log(item);
      const sname = item.SUBJECTNAME
      await this.printPdf({ data: item })
      .then(async (res) => {
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
          downloadLink.download =  name+".pdf";
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

<style>
</style>