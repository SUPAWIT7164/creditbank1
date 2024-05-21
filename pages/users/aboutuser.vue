<template>
  <div class="">
     <Navbaruser />
    <v-img :aspect-ratio="19 / 1" :src="require('~/assets/b08knorpw71t.png')">
      <v-col cols="12" class="mt-8">
        <p class="display-2 text-center">
          <span class="white--text">ระบบสะสมหน่วยกิตมหาวิทยาลัยแม่โจ้</span>
        </p>
      </v-col></v-img
    >
    <v-container>
      <v-row no-gutters>
        <v-col cols="6" class="picturebg1">
          <v-img
            :src="require('~/assets/picture1.png')"
            width="100%"
            class="ml-5 picturebg1"
          >   
          </v-img>
        </v-col>
        <v-col cols="6">
          <v-img
            :src="require('~/assets/picture2.png')"
            width="100%"
            class="mr-5"
          ></v-img>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-card depressed color="grey lighten-2">
        <h1 class="ml-6">หลักสูตรสะสมหน่วยกิต(Credit Bank)</h1>
        <h2 class="ml-6">
          การสะสมหน่วยการเรียนรู้ ( Credit Bank) หรือ ธนาคารหน่วยกิต
          เป็นการเปิดโอกาสให้ผู้เรียนและประชาชนได้เรียนและทำงานไปในเวลาเดียวกันโดยสามารถนําผลการเรียนรู้
          หรือการฝึกอบรมเปิดสอนอยู่ทั้งในระดับปริญญาตรีและบัณฑิตศึกษาเป็นการตอบโจทย์นักเรียนและบุคคลทั่วไปที่มีแผนจะเข้ามาศึกษาต่อที่สถาบันฯ
          หรือผู้ที่สนใจเพิ่มพูนความรู้และพัฒนาทักษะตลอด
          นักศึกษาจนการเรียนรู้ตลอดชีพ
        </h2>
      </v-card>
    </v-container>

    <v-card depressed color="grey darken-4 text-white">
      <v-img
        max-height="80"
        max-width="300"
        class="ml-7"
        :src="require('~/assets/mju_logo_FOOTER.png')"
      >
      </v-img>
      <h2 class="ml-10 mt-10">คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์</h2>
      <h2 class="ml-10 mt-0">มหาวิทยาลัยแม่โจ้</h2>
      <h2 class="ml-10 mt-2">
        <v-icon large color="black">mdi-phone</v-icon>0 5387 3827
      </h2>
      <h2 class="ml-10 mt-2">
        <v-icon large color="black">mdi-map-marker</v-icon>Nong Han, San Sai
        District, Chiang Mai 50290
      </h2>
      <h2 class="ml-10 mt-2">
        <v-icon large color="black">mdi-email</v-icon>science@mju.ac.th
      </h2>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.text-white {
  color: white !important;
}
.picturebg1 {
  position: relative !important;
  z-index: 10;
}
.text-box {
  position: absolute !important;
}
</style>
