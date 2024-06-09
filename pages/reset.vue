<template>
    <div>
<v-col cols="12" class="mt-8">
      <p class="display-2 text-center">รีเซ็ตรหัสผ่าน</p>
    </v-col>
  <v-col cols="12">
      <v-card
        width="550px"
        class="mx-auto mt-10 outlined shaped"
        rounded="xl"
        elevation="8"
      >
        <v-card-text class="pb-0">
          <div class="d-flex justify-center">
            <v-img
              max-height="100"
              max-width="100"
              class="text-center mb-5"
              :src="require('~/assets/mju_logo.png')"
            >
            </v-img>
          </div>
          <v-text-field
            class="mt-1"
            outlined
            label="New password"
            maxlength="13"
          ></v-text-field>
          <v-text-field
            class="mt-1"
            outlined
            label="Confirm password"
            maxlength="13"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="">
          <v-row>
            <v-col cols="12" class="text-center">
              <v-btn class="mb-12 rounded-md" color="success" @click="confrimPass"
                ><v-icon>mdi mdi-import</v-icon>รีเซ็ตรหัสผ่าน</v-btn
              ></v-col
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>

    </div>
</template>

<script>
export default {

methods: {
    confrimPass(){
          this.$swal({
      title: "รีเซ็ตรหัสผ่านสำเร็จ",
          text: `กรุณากดปุ่ม "ยืนยัน" เพื่อเข้าสู่หน้าล็อกอิน`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
       if (result.value) {
            localStorage.clear();
        this.$router.push("/login");
        } 
   });
    },
},
    
}
</script>