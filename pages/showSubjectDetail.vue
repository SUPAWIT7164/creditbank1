<template>
  <div class="">
    <!-- <Navbar /> -->
    <v-container
      class="d-flex align-center justify-center"
      style="height: 600px"
    >
      <v-card>
        <v-card-title>วิชา {{ namesj }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">ชื่อผู้สอน : {{ aj }}</v-col>
            <v-col cols="12">รายละเอียดวิชา : {{ detail }}</v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: null,
      namesj: "",
      aj: "",
      detail: "",
    };
  },
  computed: {
    ...mapGetters({
      GET_SJ: "users/GET_SJ",
    }),
  },
  methods: {
    ...mapActions({
      handlesj: "users/handlesj",
    }),
    listDetail() {
      this.handlesj({ sj: this.GET_SJ }).then((res) => {
        this.data = res[0];
        this.namesj = this.data.NAMESUBJECT;
        this.detail = this.data.DETAILSUBJECT;
        this.aj = this.data.TEACHERNAME;
      });
    },
  },
  created() {
  
  },
  async mounted() {
    await  this.listDetail();
  },
};
</script>

<style>
</style>