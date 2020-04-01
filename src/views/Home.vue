<template>
  <div class="home">
    <div id="nav">
      <top-header></top-header>
      <div id="mylink">
  <a href="/signup">sign up</a><br>
  <a href="/signin">sign in</a>
</div>
<div id="mycard"> 
  <b-container fluid>
    <b-row align-v="center">      
        <job-card
   :name="job.name"
   :id="job.id"
   :age="job.age"
   :breed="job.breed"
   :trainer="job.trainer"
   :category="job.category"
   :img="job.img"
    v-for="job in getDisplayJobs"
    :key="job.id"
  >
    </job-card>
    </b-row>
  </b-container>
</div>
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
import JobCard from "@/components/JobCard.vue";
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
  components: { 
    "top-header": TopHeader ,
    "job-card": JobCard 
    },
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
#mycard {
padding-left: 10%;
margin: 5%;
justify-content: space-between;
}
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
