<template>
    <div v-if="moves[indexMove]" class="card h-100 mb-3 text-start border-secondary" >
      <div style="">
        <div class="card-header bg-dark text-light text-capitalize">
          {{ moves[indexMove].name }}
          <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="modalInfo"
            @click="sendInfo( moves[indexMove].effect_entries[0].effect, moves[indexMove].name )">
            +
          </button>
        </div>
        <div class="card-body">
          <p class="card-text">{{ moves[indexMove].effect_entries[0].short_effect }}</p>
        </div>
      </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MoveComponent',
  props: ['urlMove', 'indexMove'],
  data(){
    return {
      url: this.$props.urlMove
    }
  },
  computed: {
    ...mapGetters({
      moves : 'getMoves'
    }),
  },
  created(){
    this.$store.dispatch('getMoveAPI', {url: this.$props.urlMove, index: this.$props.indexMove});
  },
  watch: {
    urlMove(newUrl) {
      this.$store.dispatch('getMoveAPI', {url: newUrl, index: this.$props.indexMove});
    }
  },
  methods:{
    sendInfo(info, title){
      this.$emit('clicked-show-detail', {info, title});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-text{
  font-size: 0.65rem;
}

.modal-body{
  font-size: 0.75rem;
}

</style>
