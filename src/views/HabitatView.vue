<template>
  <div v-if="habitat" class="col-12 col-md-11 col-xxl-7 mx-auto mt-5 p-4">
    <h1 class="text-capitalize mb-5">{{ habitat.name }}</h1>
    <div class="row row-cols-2 row-cols-sm-4 row-cols-md-5 row-cols-xxl-6 g-3">
      <div v-for="(pokemon, index) in habitat.pokemon_species" :key="index" class="col">
        <CardPokemonComponent :imagePokemonId="pokemon.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].slice(0,-1)" :namePokemon="pokemon.name" />
      </div>
    </div>
  </div>
</template>

<script>
import CardPokemonComponent from '@/components/CardPokemonComponent.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    CardPokemonComponent
  },
  computed: {
    ...mapGetters({
      habitat : 'getHabitat'
    })
  },
  created() {
    this.$store.dispatch('getHabitat', this.$route.params.name);
  }
}
</script>

