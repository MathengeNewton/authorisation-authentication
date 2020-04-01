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
  <div id="myform">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Update email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="email"
        ></b-form-input>
      </b-form-group>

     <b-form-group id="input-group-2" label="Phone Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.phone"
          required
          placeholder="phone number"
        ></b-form-input>
      </b-form-group>     
<b-form-group id="input-group-3" label="New position:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.position"
          required
          placeholder="position"
        ></b-form-input>
      </b-form-group> 
      <b-form-group label="profile:" label-for="file-small" label-cols-sm="2" label-size="sm">
    <b-form-file id="file-default"></b-form-file>
  </b-form-group>
      <b-button id="btn" type="submit" variant="primary">Update Info</b-button>
    </b-form>    
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</div>    
    </div>
    <router-view />
  </div>
</template>

<script>
import simplenav from "@/components/simplenav.vue";
import avatar from "@/components/avatar.vue";

export default {
  name: "about",
  async mounted() {
    this.getRecords();
  },data() {
      return {
        form: {
          email: '',
          phone:'',
          position: '',
          profile: ''
        },
        show: true
      }
    },methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.phone = ''
        this.form.position = ''
        this.form.profile = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  components: { 
    "top-header": simplenav,
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
#myform{
    margin-left: 20%;
    width: 60%;
}
</style>