<template>
  <div class="mt-8">
    <v-navigation-drawer permanent app v-if="GET_LOGIN" color="1E1E1E" dark>
      <v-toolbar-title>
        <v-img
          max-height="80"
          max-width="300"
          class=""
          :src="require('~/assets/mju_logo_FOOTER.png')"
        >
        </v-img>
      </v-toolbar-title>
      <v-divider></v-divider>
      <v-list nav dense v-for="(item, i) in items" :key="i">
        <v-list-item
          :key="item.title"
          class="list-item-shadow"
          link
          :to="item.to"
          v-if="!item.nested"
          @click="checkMenu(item)"
        >
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group v-else no-action :prepend-icon="item.icon">
          <template #activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item2, index) in item.subitems"
            :key="index"
            link
            :to="item2.to"
          >
            <v-list-item-icon>
              <v-icon class="ml-n10">{{ item2.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-n10">{{
              item2.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      selectedItem: "",
      items: [
        {
          title: "จัดการสิทธิ์การสร้างโพสต์อบรม",
          icon: "mdi-wrench",
          to: "/admin/adminapprove",
        },
        {
          title: "แก้ไขข้อมูลของผู้ใช้",
          icon: "mdi-wrench",
          to: "/admin/manageusers",
        },
        // {
        //   title: "ดูจำนวนผู้ใช้งานในระบบ",
        //   icon: "mdi-wrench",
        //   to: "/admin/managecer",
        // },
        // {
        //   title: "จัดการโพสต์",
        //   icon: "mdi-wrench",
        //   to: "/admin/manageSubject",
        // },
        // {
        //   title: "เพิ่มเนื้อหาข่าวสาร",
        //   icon: "mdi-wrench",
        //   to: "/admin/manageNews",
        // },

        { title: "ออกจากระบบ", icon: "mdi-logout" },
      ],

      version: "",
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      GET_LOGIN: "users/GET_LOGIN",
    }),
  },
  methods: {
    ...mapMutations({}),
    checkMenu(item) {
      console.log(item);
      if (item.title == "ออกจากระบบ") {
        this.$swal({
          title: "ออกจากระบบ",
          text: `กรุณากดปุ่ม "ยีนยัน" เพื่อออกจากระบบ`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then((result) => {
          if (result.value) {
            localStorage.clear();
            this.$router.push({ path: "/" });
          }
        });
      }
    },
  },
};
</script>
