<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Houses</h1>
        <button @click="clearActiveHouse()" v-if="account.id" class="btn btn-dark fs-2" data-bs-toggle="modal"
          data-bs-target="formModal">New Listing
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="house in houses" :key="house.id" class="col-md-6 m-auto mb-3">
        <!-- <div class="bg-white border border-dark rounded d-flex">
          <img class="img-fluid" :src="house.imgUrl" :alt="house">
          <div>
            <h2>{{ house.year }} {{ house.bedrooms }} {{ house.bathrooms }}</h2>
          </div>
        </div> -->
        <HouseCard :houseProp="house" />
      </div>
    </div>
  </div>
</template>


<script>
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue';

export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      // logger.log("house page mounted");
      getHouses();
    });
    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account),
    };
  },
  components: { HouseCard }
}
</script>


<style lang="scss" scoped></style>