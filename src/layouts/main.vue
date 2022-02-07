<template>
  <div class="">
    <Navbar/>
    <Menu/>
  </div>
  <div class="container uk-padding" :class="{'container_active': ($store.state.winW > 960 && $store.state.activeNav)}">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar'
import Menu from '@/layouts/Menu'

  export default {
    components: {
      Navbar, Menu
    },

    created() {
      document.body.setAttribute('uk-img', '');
      document.body.setAttribute("data-src", 'https://chelseablues.ru/images/news14/228c03bf904.jpg');
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
