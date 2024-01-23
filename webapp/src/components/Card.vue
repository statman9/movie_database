<script setup>
const props = defineProps({
  movie_id: Number,
  title: String,
  poster_image_url: String,
  popularity_summary: String,
  vote_count: Number
})
</script>

<template>
  <div class="row item">
    <div class="col-2"></div>
    <div class="col-6">
      <h3>{{title}}</h3>
      <h5>{{ popularity_summary }} out of {{ vote_count }}</h5>
    </div>
    <div class="col-2">
      <img v-bind:src="'https://image.tmdb.org/t/p/w200/' + poster_image_url" />
    </div>
    <div class="col-2"></div>
  </div>
</template>

<style scoped>
.item {
  text-align: left;
  margin: 20 auto;
}
</style>
