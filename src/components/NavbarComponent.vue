<template>
    <div class="navmenu">
        <nav class="navbar navbar-expand-lg sticky-top p-2">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="../assets/title.png" alt="pokemon" width="120">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item pt-2 mx-0 mx-lg-2">
                            <router-link to="/" class="pb-1 px-3 rounded">Home</router-link>
                        </li>
                        <li class="nav-item pt-2 mx-0 mx-lg-2">
                          <router-link to="/pokedex" class="pb-1 px-3 rounded">Pokedex</router-link>
                        </li>
                        <li class="nav-item pt-2 mx-0 mx-lg-2 me-lg-5">
                          <router-link to="/habitats" class="pb-1 px-3 rounded">Habitats</router-link>
                        </li>
                        <div class="login_register_container p-1 ms-lg-5">
                          <div class="login_register" v-if="!loggedin">
                            <img src="../assets/ash.png" alt="ash" width="40">
                            <router-link to="/login" class="me-2 pb-1 px-3 rounded">Login</router-link> |
                            <router-link to="/register" class="m-2 pb-1 px-3 rounded">Sign up</router-link>
                          </div>
                          <div v-else class="login_register">
                              <img src="../assets/ash.png" alt="ash" width="40">
                              <router-link to="/" @click="logout" class="m-2 pb-1 px-3 rounded">Logout</router-link>
                          </div>
                        </div>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavbarComponent',
  computed: {
    ...mapGetters({
      loggedin : 'getLoggedin',
    })
  },
  methods: {
      logout(){
        this.$store.dispatch('setLoggedoutAction');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navmenu{
  box-shadow: 0 8px 6px -6px #ccc;
}
nav {
  padding: 8px;
}

nav li {
  font-weight: bold;
  color: #666;
  text-decoration: none;
  margin: 0px 20px;
}
nav a:hover {
  font-weight: 800;
  background-color: #333;
  color: #fff;
}
nav .navbar-brand:hover {
  background-color: #fff;
}
nav a.router-link-exact-active {
  background-color: #333;
  color: #fff;
}
.login_register_container{
  font-size: 0.8rem;
}


@media (max-width: 991px) {
  .navmenu{
    font-size: 0.8rem;
  }
  .navmenu li{
    padding-bottom: 7px;
  }
  .login_register_container{
    font-size: 0.6rem;
  }
}

.navbar-toggler-icon{
  background-image: url('../assets/pokeball.webp');
}
.navbar-toggler{
  font-size: 1.5rem;
}


</style>
