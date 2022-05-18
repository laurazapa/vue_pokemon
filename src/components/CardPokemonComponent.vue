<template>
    <div class="card">
      <div class="bg-light">
        <router-link :to="`/pokemon/${namePokemon}`">
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imagePokemonId}.png`" class="card-img-top" :alt="namePokemon">
        </router-link>
      </div>
      <div class="card-body p-1 pt-2">
        <router-link :to="`/pokemon/${namePokemon}`">
          <h5 class="card-title text-capitalize text-sm">{{ namePokemon }}</h5>
        </router-link>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardPokemonComponent',
  props: ['imagePokemonId', 'namePokemon'],
  data(){
    return {
      image : this.urlPokemon
    }
  },
  computed: {
    ...mapGetters({
      pokemon : 'getPokemon',
      moves : 'getMoves'
    })
  },
  created() {
    this.$store.dispatch('getPokemon', this.$route.params.name);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-text{
    font-size: 0.65rem;
  }
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
