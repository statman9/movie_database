<script setup>
import {ref, watchEffect, toValue} from 'vue'
import Results from './Results.vue'
</script>

<template>
  <form ref="form" method="post" @submit.prevent="useFetch">
    <div class="row">
      <div class="col-2" id="find-header-text">Find movie by title:</div>
      <div class="col">
        <div class="input-group">
          <input type="text" class="form-control" v-model="movieTitle" ref="movieTitle" placeholder="Movie Name">
          <button type="submit" class="btn btn-primary"><i class="bi bi-search"></i></button>
        </div>
      </div>
    </div>
  </form>
  <br/>
  <div class="row">
    <Results v-model="movies" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: '',
      movies: null
    }
  },
  methods: {
    async useFetch() {
        const response = await fetch(
            "http://localhost:3000/movies?search=" + this.movieTitle, 
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            }
        )
        this.movies = await response.json()
    }
  }
}
</script>


<style>
#find-header-text {
  vertical-align: middle;
  font-size: 20px;
}
</style>