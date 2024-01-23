<script setup>
import Card from './Card.vue'
const movies = defineModel()
</script>

<template>
  <div v-for="item in movies">
    <Card 
      v-bind:title="item.title" 
      v-bind:poster_image_url="item.poster_path" 
      v-bind:movie_id="item.id" 
      v-bind:popularity_summary="item.popularity" 
      v-bind:vote_count="item.vote_count"
    />
  </div>
</template>
