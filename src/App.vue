<template>
  <div>  
    <NavbarComponent />
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>


<style>
@font-face {
  font-family: 'pokemon';
  src: local("pokemon"), url("./../public/pokemon.ttf");
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'pokemon';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fontnormal{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
