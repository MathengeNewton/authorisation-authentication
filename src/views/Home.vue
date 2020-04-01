<template>
  <div class="home">
    <div id="nav">
      <top-header></top-header>
    </div>
    <router-view />
    <b-container>
      <b-row align-v="center">
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="getRows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @input="paginate(currentPage)"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
import TopHeader from "@/components/top-header.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  async mounted() {
    this.getRecords();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    };
  },
  components: { "top-header": TopHeader  },
  computed: {
    ...mapGetters(["getRows", "getDisplayJobs"])
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
    async getRecords() {
      await this.$store.dispatch("fetchJobs");
    }
  }
};
</script>
<style lang="scss" scoped>
// b-card {
// padding: 10px;
// }
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
