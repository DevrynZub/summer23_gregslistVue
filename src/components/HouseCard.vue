<template>
  <div class="bg-dark border border-dark rounded d-flex">
    <img class="img-fluid house-img rounded" :src="houseProp.imgUrl"
      :alt="houseProp.bedrooms + ' ' + houseProp.bathrooms">
    <div>
      <h2>{{ houseProp.year }} {{ houseProp.bedrooms }} {{ houseProp.bathrooms }}</h2>
      <p>{{ houseProp.description }}</p>
      <h4>Created By: {{ houseProp.creator.name }}</h4>
      <!-- <img class="creator-picture" :src="houseProp.creator.picture" :alt="houseProp.creator.name"> -->
    </div>
    <div v-if="account.id == houseProp.creatorId"></div>

  </div>
</template>


<script>
import { computed } from 'vue';
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';


export default {
  props: {
    houseProp: { type: House, required: true }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
    }
  }
}
</script>


<style lang="scss" scoped>
.house-img {
  width: 40%;
  object-fit: cover;
  object-position: center;
}
</style>