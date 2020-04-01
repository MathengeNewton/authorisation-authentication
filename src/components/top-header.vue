<template>
  <div>
    <b-navbar toggleable="lg" type="dark" id="navigationbar" variant="info">
      <b-navbar-brand href="#">Our Kenels</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/info">view info</b-nav-item>
          <b-nav-item to="/myinfo">my account</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-form @submit.prevent="search">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchText"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <img 
          src="../assets/logo.png" 
          id="myavata"
          href="#"
          variant="info"
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    search() {      
      this.$store.dispatch("search", { text: this.searchText });
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: rgb(107, 96, 96);
}
#navigationbar{
  background-color: rgb(201, 219, 233) !important;
}
#nav-collapse{
  color: #0f0f0f0f;
}
#myavata{
  margin-left:10%;
  background-color: #fff;
  border-radius: 50%;
  width: 20%;
}
</style>
