<template>
    <div v-if="pokemon" class="my-5">
      <h1 class="mb-5 text-capitalize">{{ pokemon.name }}</h1>
      <div class="col-xxl-8 col-md-10 col-12 mx-auto row d-flex p-4 mb-5">
        <div class="col-lg-6 col-10 mx-auto">
          <img class="img-fluid" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`" :alt="pokemon.name">
        </div>
        <div class="col-lg-6 col-md-10 col-12 mx-auto p-4 bg-light rounded fontnormal text-start">
          <p><b>Base experience: </b> {{ pokemon.base_experience }}</p>
          <p><b>Height: </b> {{ pokemon.height/10 }}m</p>
          <p><b>Weight: </b> {{ pokemon.weight }}kg</p>
          <p class="mb-1"><b>Abilities: </b></p>
          <div class="row d-flex flex-wrap mb-3">
            <div v-for="(ability, index) in pokemon.abilities" :key="index" class="col-auto bg-dark mx-2 px-4 py-1 rounded-pill text-light">
              {{ ability.ability.name }}
            </div>
          </div>
          <p class="mb-1"><b>Types: </b></p>
          <div class="row d-flex flex-wrap mb-3"> 
            <div v-for="(type, index) in pokemon.types" :key="index" class="col-auto bg-dark mx-2 px-4 py-1 rounded-pill text-light">
              {{ type.type.name }}
            </div>
          </div>
          <p class="mb-0"><b>Games: </b></p>
          <ul class="columns">
            <li v-for="(game, index) in pokemon.game_indices" :key="index" class="m-2">
              <span class="">{{ game.version.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="px-md-5">
        <h3>Pokemon moves</h3>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-xxl-4 g-4 justify-content-center px-md-5 p-3">
          <div v-for="(move, index) in pokemon.moves" :key="index" class="col">
            <MoveComponent :urlMove="move.move.url" :indexMove="index" @clicked-show-detail="clickedShowDetailModal" />
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" tabindex="-1" aria-hidden="true" id="modalInfo" aria-labelledby="information">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 800px">
          <div class="modal-content p-3">
            <div class="modal-header">
              <h4 class="modal-title text-capitalize" id="information"> {{ modalTitle }} </h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              {{ information }}
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import MoveComponent from "@/components/MoveComponent.vue"
import { mapGetters } from 'vuex'

export default {
  name: 'PokemonComponent',
  data(){
    return{
      information: '',
      modalTitle: ''
    }
  },
  components: {
    MoveComponent
  },
  computed: {
    ...mapGetters({
      pokemon : 'getPokemon',
      moves : 'getMoves'
    })
  },
  created() {
    this.$store.dispatch('getPokemon', this.$route.params.name);
  },
  methods: {
    clickedShowDetailModal(obj){
      this.information = obj.info;
      this.modalTitle = obj.title;

      let modal = document.getElementById('modalInfo');
      modal.style.display = 'block';
      modal.classList = 'modal fade show';
      document.body.classList = 'modal-open';
      document.getElementById('backmodal').classList = '';
    },
    closeModal(){
      console.log('close');
      let modal = document.getElementById('modalInfo');
      modal.style.display = 'none';
    }
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
}
.columns{
    column-count: 3;
}

@media (max-width: 767px) {
  .columns{
      column-count: 2;
  }
}

.modal.fade.show{
  background-color: rgba(0, 0, 0, 0.37);
}

@media (max-width: 991px) {
  .modal-content{
      width: 85%;
      margin: auto;
  }
}

  

</style>
