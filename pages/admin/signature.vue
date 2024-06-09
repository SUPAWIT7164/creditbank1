<template>
  <div class="">
    <NavbarAd />
    <v-row class="mx-2">
      <v-col cols="12">
        <p class="text-center display-1">จัดการลายเซ็น</p>
      </v-col>
      <v-col cols="12">
        <v-btn @click="openDialog" color="primary">เพิ่มลายเซ็น</v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="sigData">
          <template #[`item.action`]="{ item }">
            <v-btn @click="deleteData(item.ID)">ลบข้อมูล</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="600px" class="mx-auto">
      <v-card>
        <v-card-title> เพิ่มลายเซ็น </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="รายชื่อ"
                outlined
                dense
                v-model="nameSignature"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="ตำแหน่ง"
                outlined
                dense
                v-model="position"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input
                label="รูปลายเซ็น"
                accept="image/*"
                outlined
                dense
                v-model="file"
                @change="handleChange"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-btn @click="saveData" color="primary">บันทึกข้อมูล</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import { mapActions } from "vuex";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {
      dialog: false,
      file: null,
      nameSignature: null,
      position: null,
      headers: [
        {
          text: "ชื่อ",
          align: "start",
          sortable: false,
          value: "name",
          width: "200px",
        },
        {
          text: "ตำแหน่ง",
          align: "start",
          sortable: false,
          value: "position",
          width: "200px",
        },
        {
          text: "จัดการ",
          align: "center",
          sortable: false,
          value: "action",
          width: "200px",
        },
      ],
      sigData: [],
    };
  },
  async mounted() {
    this.sigData = await this.getSignature();
  },
  methods: {
    ...mapActions({
      insertSignature: "users/insertSignature",
      getSignature: "users/getSignature",
      deleteSig: "users/deleteSig",
    }),
    openDialog() {
      this.dialog = true;
    },
    handleChange(event) {
      this.file = event;
      console.log(this.file);
    },
    async callData() {
      this.sigData = await this.getSignature();
    },
    deleteData(item) {
      this.$swal({
        title: "ต้องการลบลายเซ็นหรือไม่?",
        text: "เมื่อลบไปแล้วไม่สามารถเรียกข้อมูลเดิมได้อีก",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.deleteSig({
            ID: item,
          })
            .then(() => {
              this.$swal({
                title: "ลบข้อมูลสำเร็จ",
                icon: "success",
                showCancelButton: false,
              });
              this.callData();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    async saveData() {
      this.dialog = false;
      const data = new FormData();
      data.set("FILES", this.file);
      data.set("name", this.nameSignature);
      data.set("position", this.position);

      await this.insertSignature(data).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>