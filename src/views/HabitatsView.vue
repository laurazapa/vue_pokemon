<template>
  <div>
    <div v-if="habitatList != []" class="col-12 col-md-11 col-xxl-7 mx-auto mt-5 p-4">
      <div class="row justify-content-center row-cols-1 row-cols-lg-2">
        <div v-for="(habitat) in habitatList" :key="habitat.id">
          <div class="rounded bg-dark text-light py-2 px-3 my-2 habitat">
            <h5 class="text-capitalize">{{ habitat.name }}</h5>
            <router-link :to="`/habitat/${habitat.name}`">
              <p>See its pokemons</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center my-5">
      <img src="../assets/grass_img.png" alt="" class="img-fluid m-3 rounded" style="height: 300px; width:auto;">
      <img src="../assets/water_img.png" alt="" class="img-fluid m-3 rounded" style="height: 300px; width:auto;">
      <img src="../assets/cave_img.png" alt="" class="img-fluid m-3 rounded" style="height: 300px; width:auto;">
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      habitatList : 'getHabitatList'
    })
  },
  created() {
    this.$store.dispatch('getHabitatList');
  }
}
</script>

<style scoped>
  h5{
    font-size: 1.1rem;
  }
  .habitat{
    box-shadow: rgba(0, 0, 0, 0.7) 0px 3px 8px;
  }
  a{
    text-decoration: none;
    color: rgb(159, 235, 140);
  }
  a:hover{
    text-decoration: none;
    color: rgb(103, 233, 27);
  }
</style>

