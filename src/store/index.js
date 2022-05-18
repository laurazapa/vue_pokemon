import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    loggedin: false,
    pokedexList: [],
    pokemon: null,
    moves: [],
    habitatList: [],
    habitat: null
  },
  getters: {
    getLoggedin(state){
      return state.loggedin;
    },
    getPokedexList(state){
      return state.pokedexList
    },
    getPokemon(state){
      return state.pokemon
    },
    getMoves(state){
      return state.moves
    },
    getHabitatList(state){
      return state.habitatList
    },
    getHabitat(state){
      return state.habitat
    },
  },
  mutations: {
    setLoggedin(state){
      state.loggedin = true;
    },
    setLoggedout(state){
      state.loggedin = false;
    },
    setPokedexList(state, pokemons){
        state.pokedexList  = pokemons;
    },
    setPokemon(state, pokemon){
      state.pokemon  = pokemon;
    },
    setMove(state, obj){
      state.moves[obj.index] = obj.move;
    },
    setHabitatList(state, habitats){
      state.habitatList = habitats;
    },
    setHabitat(state, habitat){
      state.habitat = habitat;
    }
  },
  actions: {
    setLoggedinAction (context) {
      context.commit('setLoggedin');
    },
    setLoggedoutAction (context) {
      context.commit('setLoggedout');
    },
    async getPokedexList (context) {
      let responseAPI = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      let pokemons = responseAPI.data.results;
      pokemons.forEach( function(element) {
        let id = element.url.split('https://pokeapi.co/api/v2/pokemon/')[1].slice(0,-1);
        element.id = id;
        element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.id}.png`;
      });
      context.commit('setPokedexList', pokemons);
    },
    async getPokemon (context, name) {
      let responseAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let pokemon = responseAPI.data;
      context.commit('setPokemon', pokemon);
    },
    async getMoveAPI (context, obj) {
      let responseAPI = await axios.get(obj.url);
      let move = responseAPI.data;
      context.commit('setMove', {move: move, index: obj.index});
    },
    async getHabitatList (context) {
      let responseAPI = await axios.get("https://pokeapi.co/api/v2/pokemon-habitat");
      let habitats = responseAPI.data.results;
      context.commit('setHabitatList', habitats);
    },
    async getHabitat (context, name) {
      let responseAPI = await axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${name}`);
      let habitat = responseAPI.data;
      context.commit('setHabitat', habitat);
    },
  },
  modules: {
  }
})
