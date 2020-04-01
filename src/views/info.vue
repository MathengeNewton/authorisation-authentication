<template>
  <div class="about">
    <div id="nav">
      <top-header></top-header>
    </div>
    <div id="body">
      <div id="head">
        <my-avatar></my-avatar>
      </div>  
      <div>
  <b-card no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Personal details</b-nav-item>
        <b-nav-item id="details">Career details</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-title >Personal details</b-card-title>
      <b-card-text>
        <div class="dets">
         <p><strong> name:  </strong></p>
         <p><strong> email:  </strong></p>
         <p><strong>phone:  </strong></p>
         <p><strong> position:  </strong></p>
        </div>
      </b-card-text>
      <b-button to="/updateinfo" variant="primary">Go somewhere</b-button>
    </b-card-body>

  </b-card>
</div>    
    </div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from "@/components/top-header.vue";
import avatar from "@/components/avatar.vue";

export default {
  name: "about",
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
    "top-header": TopHeader,
    "my-avatar": avatar
     }
};
</script>
<style lang="scss" scoped>
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
#body{
  width: 70%;
  height: 90%;
  margin-left:15%;
  border: 0.2px solid black;
  padding: 5%;
}
#head{
  width: 60%;
  margin-left: 20%;
  height: 30%;
  padding: 5%;
}
.dets{
  text-align: left;
}
</style>