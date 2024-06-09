<template>
  <div class="">
    <NavbarAd />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card height="650px">
            <v-card-title class="">
              <p class="display-1 text-center">จัดการรายชื่อผู้ใช้</p>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="ค้นหารายชื่อ"
                outlined
                hide-details=""
                append-icon="mdi-magnify"
              ></v-text-field>
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="5"
                :search="search"
                class="elevation-5"
                :height="400"
              ></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
      search: "",
      headers: [
        {
          text: "คำนำหน้า",
          align: "start",
          sortable: false,
          value: "Title",
          width: "200px",
        },
        {
          text: "ชื่อ",
          align: "start",
          sortable: false,
          value: "Name",
          width: "200px",
        },
        {
          text: "นามสกุล",
          align: "start",
          sortable: false,
          value: "Lastname",
          width: "200px",
        },
        {
          text: "คำนำหน้าภาษาอังกฤษ",
          align: "start",
          sortable: false,
          value: "Titleeng",
          width: "200px",
        },
        {
          text: "ชื่อภาษาอังกฤษ",
          align: "start",
          sortable: false,
          value: "Nameeng",
          width: "200px",
        },
        {
          text: "นามสกุลภาษาอังกฤษ",
          align: "start",
          sortable: false,
          value: "Lastnameeng",
          width: "200px",
        },
        {
          text: "เลขบัตรประชาชน",
          align: "start",
          sortable: false,
          value: "IDCard",
          width: "200px",
        },
        {
          text: "สถานศึกษา",
          align: "start",
          sortable: false,
          value: "School",
          width: "200px",
        },
        {
          text: "ระดับการศึกษา",
          align: "start",
          sortable: false,
          value: "LevelC",
          width: "200px",
        },
        {
          text: "เบอร์โทรศัพท์",
          align: "start",
          sortable: false,
          value: "Tel",
          width: "200px",
        },
        {
          text: "อีเมล",
          align: "start",
          sortable: false,
          value: "Email",
          width: "200px",
        },
      ],
      users: [],
    };
  },
  methods: {
    ...mapActions({
      getUser: "users/getUser",
    }),
    async getAllUser() {
      this.users = await this.getUser();
    },
  },
  mounted() {
    this.getAllUser();
  },
};
</script>

<style>
</style>