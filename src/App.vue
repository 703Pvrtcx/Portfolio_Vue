<template>
<div id="app">
  <mvc-topbar></mvc-topbar>
  <router-view></router-view>
</div>
</template>
<script>
import MvcTopbar from '@/components/Topbar.vue';

import { actionTypes } from './store/modules/auth';

export default {
    name: 'App',
    components: {
      MvcTopbar
    },
    mounted(){
      this.$store.dispatch(actionTypes.getCurrentUser);
    }
  }
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
