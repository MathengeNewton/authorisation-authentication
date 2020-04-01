<template>
  <div>
    <b-col>
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
        </b-card-text>

        <b-button
          v-b-tooltip.hover
          title="Tooltip content"
          v-b-modal="modalId"
          variant="primary"
          >view more</b-button
        >
        <b-modal :id="modalId" title="BootstrapVue">
          <b-card
        :title="name"
        :img-src="img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        id="mb-2"
      ></b-card>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "img","id","age","breed","category"],
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
