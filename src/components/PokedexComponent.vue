<template>
    <div v-if="pokedexList != []" class="col-12 col-md-11 col-xxl-7 mx-auto mt-5 p-4">
      <div class="row row-cols-2 row-cols-sm-4 row-cols-md-5 row-cols-xxl-6 g-3">
        <div v-for="(pokemon) in pokedexList" :key="pokemon.id" class="col">
          <CardPokemonComponent :imagePokemonId="pokemon.id" :namePokemon="pokemon.name" />
        </div>
      </div>
    </div>
</template>

<script>
import CardPokemonComponent from '@/components/CardPokemonComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PokedexComponent',
  components:{
    CardPokemonComponent
  },
  computed: {
    ...mapGetters({
      pokedexList : 'getPokedexList'
    })
  },
  created() {
      this.$store.dispatch('getPokedexList');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h5{
    font-size: 0.65rem;
  }
  .card:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  a{
    text-decoration: none;
    color: darkslategrey;
  }

</style>
