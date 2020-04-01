<template>
  <div id="img">
    <b-col>
       <b-card 
       id="myimage" 
       :img-src="img" 
       class="mb-2"
       overlay>
       </b-card>
  </b-col>
</div>
</template>

<script>
export default {
name:"gallery",
  props: ["img","name"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
}
</script>

<style scoped>
#img{  
  height: 50%;
  margin-left: 15%;
}
#myimage{
  width: 100%;
  margin-bottom: 20%;
  margin-left: 15%;
  display:inline-flex;
}
</style>