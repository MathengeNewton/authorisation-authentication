<template>
  <div>
    <b-card
        :title="name"
        :img-src="img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <p><strong>Breed: </strong> {{breed}}</p>
          <p><strong>Age: </strong> {{age}}</p>
          <p><strong>Category: </strong>{{category}}</p>
          <p><strong>Trainer: </strong>{{trainer}}</p>
        </b-card-text>

    <b-button href="/update-animal" variant="primary">update</b-button>
  </b-card>
  </div>
</template>

<script>
export default {
  props: ["name", "img","id","age","breed","category","trainer"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    }
  }
};
</script>

<style scoped>
#mb-2{
  margin-left:15%;
}
</style>
