<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Our Kenels</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">home</b-nav-item>
      </b-navbar-nav>   
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
    name: "simplenav"
}
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