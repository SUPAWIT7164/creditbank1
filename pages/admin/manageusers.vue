<template> 
  <div class="">
    <NavbarAd />
    <v-row>
    
      <v-col cols="12" md="12" class="text-center">
        <p class="headline">จัดการผู้ใช้งาน</p>
      </v-col>

      <v-col cols="12">
        <v-container>
          <v-text-field
            label="ค้นหารายชื่อ"
            v-model="search"
            outlined
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :items="itemsWithIndex"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            mobile-breakpoint="0"
            @page-count="pageCount = $event"
          >
            <template #[`item.FILE`]="{ item }">
              <v-img width="150" height="100px" :src="item.FILE"> </v-img>
            </template>
            <template #[`item.actions`]="{ item }">
              <div align="center">
                <v-menu offset-y>
                  <template #activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click="editData(item)">
                      <v-list-item-title>แก้ไขข้อมูล</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteData(item)">
                      <v-list-item-title>ลบข้อมูล</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template>
          </v-data-table>
        </v-container>
      </v-col>

      <v-row justify="center">
        <v-col cols="12" md="12">
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialogEdit" width="650px">
        <v-card>
          <v-form ref="formedit">
            <v-card-title>แก้ไขข้อมูล</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-select
                    :items="titleList"
                    v-model="titleName"
                    item-text="name"
                    item-value="name"
                    outlined
                    label="คำนำหน้า"
                  ></v-select>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    v-model="FIRSTNAME"
                    outlined
                    label="ชื่อ"
                  ></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    v-model="LASTNAME"
                    outlined
                    label="นามสกุล"
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-select
                    :items="titleListEng"
                    v-model="titleNameEng"
                    item-text="name"
                    item-value="name"
                    outlined
                    label="คำนำหน้าภาษาอังกฤษ"
                  ></v-select>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    v-model="FIRSTNAMEENG"
                    outlined
                    label="ชื่อภาษาอังกฤษ"
                  ></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    v-model="LASTNAMEENG"
                    outlined
                    label="นามสกุลภาษาอังกฤษ"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="LEVELC"
                    :items="levelClass"
                    item-text="name"
                    item-value="name"
                    outlined
                    label="วุฒิการศึกษา"
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="SCHOOL"
                    outlined
                    label="สถานศึกษา"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="EMAIL"
                    outlined
                    label="อีเมล"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="TEL"
                    outlined
                    label="เบอร์โทร"
                  ></v-text-field>
                </v-col>
                <v-col cols="6"> </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="USERNAME"
                    outlined
                    label="ชื่อผู้ใช้"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="PASSWORD"
                    outlined
                    label="รหัสผ่าน"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-img :src="file" />
                </v-col>
                <v-col cols="6"> <v-btn @click="cancel">ยกเลิก</v-btn></v-col>
                <v-col cols="6" class="text-right">
                  <v-btn @click="saveEdit" color="primary">บันทึก</v-btn></v-col
                >
              </v-row>
            </v-card-text>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
    
  </div>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "~/plugins/firebaseInit";
import { mapMutations } from "vuex";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {
      allUsers: [],
      search: "",
      page: 1,
      itemsPerPage: 10,
      pageCount: 0,
      dialogEdit: false,
      headers: [
        { text: "ลำดับ", value: "index", align: "left", width: "100px" },
        {
          text: "คำนำหน้า",
          value: "TITLE",
          align: "left",
          width: "120px",
        },
        { text: "ชื่อ", value: "FIRSTNAME", align: "left", width: "200px" },
        { text: "นามสกุล", value: "LASTNAME", align: "left", width: "200px" },
        {
          text: "คำนำหน้าภาษาอังกฤษ",
          value: "TITLEENG",
          align: "left",
          width: "250px",
        },
        {
          text: "ชื่อภาษาอังกฤษ",
          value: "FIRSTNAMEENG",
          align: "left",
          width: "250px",
        },
        {
          text: "นามสกุลภาษาอังกฤษ",
          value: "LASTNAMEENG",
          align: "left",
          width: "250px",
        },
        {
          text: "วุฒิการศึกษา",
          value: "LEVELC",
          align: "center",
          width: "150px",
        },
        {
          text: "สถานศึกษา",
          value: "SCHOOL",
          align: "center",
          width: "150px",
        },
        { text: "อีเมล", value: "EMAIL", align: "center", width: "150px" },
        { text: "เบอร์โทร", value: "TEL", align: "center", width: "150px" },
        {
          text: "รูปบัตรประชาชน",
          value: "FILE",
          align: "left",
          width: "300px",
        },
        {
          text: "ชื่อผู้ใช้",
          value: "USERNAME",
          align: "center",
          width: "150px",
        },
        {
          text: "รหัสผ่าน",
          value: "PASSWORD",
          align: "center",
          width: "150px",
        },
        {
          text: "สิทธิ์ผู้ใช้",
          value: "ROLE",
          align: "center",
          width: "150px",
        },
        { text: "จัดการ", value: "actions", align: "center", width: "150px" },
      ],
      //edit
      titleName: null,
      titleNameEng: null,
      titleList: [
        {
          name: "นาย",
        },
        {
          name: "นาง",
        },
        {
          name: "นางสาว",
        },
      ],
      titleListEng: [
        {
          name: "Mr.",
        },
        {
          name: "Mrs.",
        },
        {
          name: "Miss",
        },
      ],
      FIRSTNAME: "",
      LASTNAME: "",
      FIRSTNAMEENG: null,
      LASTNAMEENG: "",
      USERNAME: null,
      PASSWORD: null,
      CPASSWORD: null,
      levelClass: [
        {
          id: 1,
          name: "มัธยมศึกษาตอนต้น",
        },
        {
          id: 2,
          name: "มัธยมศึกษาตอนปลาย",
        },
        {
          id: 3,
          name: "ปวช.",
        },
        {
          id: 4,
          name: "ปวส.",
        },
        {
          id: 5,
          name: "อนุปริญญา",
        },
        {
          id: 6,
          name: "ปริญญาตรี",
        },
        {
          id: 7,
          name: "ปริญญาโท",
        },
        {
          id: 8,
          name: "ปริญญาเอก",
        },
      ],
      LEVELC: "",
      EMAIL: "",
      TEL: "",
      SCHOOL: "",
      file: null,
      refId: null,
      storageRefG: null,
    };
  },
  computed: {
    itemsWithIndex() {
      return this.allUsers.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
  created() {
    this.SET_LOGIN(true);
    this.listUser();
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
     goadminpage() {
      this.$router.push("/admin/adminpage");
      this.citizenID = "";
    }, 
    async listUser() {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.refId = doc.id;
        const isExisting = this.allUsers.some(
          (existingProduct) => existingProduct.refId === product.refId
        );
        if (!isExisting) {
          this.allUsers.push(product);
        }
      });
    },
    editData(item) {
      this.dialogEdit = true;
      this.titleName = item.TITLE;
      this.titleNameEng = item.TITLEENG;
      this.FIRSTNAME = item.FIRSTNAME;
      this.LASTNAME = item.LASTNAME;
      this.FIRSTNAMEENG = item.FIRSTNAMEENG;
      this.LASTNAMEENG = item.LASTNAMEENG;
      this.LEVELC = item.LEVELC;
      this.SCHOOL = item.SCHOOL;
      this.EMAIL = item.EMAIL;
      this.TEL = item.TEL;
      this.USERNAME = item.USERNAME;
      this.PASSWORD = item.PASSWORD;
      this.refId = item.refId;
      //   console.log(item);
    },
    deleteData(item) {
      this.$swal({
        title: "ต้องการลบข้อมูลนี้หรือไม่?",
        text: "เมื่อลบไปแล้วไม่สามารถเรียกข้อมูลเดิมได้อีก",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log("1");
          await deleteDoc(doc(db, "users", item.refId));
          console.log("2");
          this.$swal({
            title: "ลบข้อมูลสำเร็จ",
            icon: "success",
            showCancelButton: false,
          });
          console.log("3");
          this.listUser();

          location.reload();
        } else {
          console.log("error");
        }
      });
    },
    saveEdit() {
      this.$swal({
        title: "ต้องการแก้ไขข้อมูลนี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const refid = doc(db, "users", this.refId);
          await updateDoc(refid, {
            TITLE: this.titleName,
            TITLEENG: this.titleNameEng,
            FIRSTNAME: this.FIRSTNAME,
            LASTNAME: this.LASTNAME,
            FIRSTNAMEENG: this.FIRSTNAMEENG,
            LASTNAMEENG: this.LASTNAMEENG,
            LEVELC: this.LEVELC,
            SCHOOL: this.SCHOOL,
            EMAIL: this.EMAIL,
            TEL: this.TEL,
            USERNAME: this.USERNAME,
            PASSWORD: this.PASSWORD,
          });
          this.$swal({
            title: "แก้ไขข้อมูลสำเร็จ",
            icon: "success",
            showCancelButton: false,
          });
          this.dialogEdit = false;

          location.reload();
        } else {
          console.log("error");
        }
      });
    },
    cancel() {
      this.dialogEdit = false;
      this.$refs.formEdit.reset();
    },
  },
};
</script>

<style>
</style>