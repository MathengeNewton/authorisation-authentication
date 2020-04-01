<template>
<div id="loginpage">
  <div id="myform">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
<b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Full names"
        ></b-form-input>
      </b-form-group> 
<b-form-group
        id="input-group-1"
        label="Enter email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
     <b-form-group id="input-group-3" label="password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required
          placeholder="password"
        ></b-form-input>
      </b-form-group>  
      <b-form-group id="input-group-3" label="confirm password:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.confirmed_password"
          type="password"
          required
          placeholder="confirm password"
        ></b-form-input>
      </b-form-group>    

      <b-button id="btn" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div id="mylink">
  <a href="/signin">sign in</a>
</div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
  <router-view/>
</div>

</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password:'',
          confirmed_password:''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss">
#loginpage{
  background-color: aquamarine;
  padding-left:20%;
  padding-right:20%;
  padding-bottom: 10%;
  padding-top:5%;
}
#myform{
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
  margin-bottom: 5%;
}
#mylink{
  margin-top: 5%;
  margin-left:70%;
}
#btn{
  margin-left: 30%;
  margin-right:5%;
}
</style>
