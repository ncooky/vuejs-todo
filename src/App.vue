<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">TODO</router-link> |
      <router-link to="/completed">Completed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import actionTypes from '@/store/action-types'

export default {
  name: 'app',
  beforeCreate () {
    this.$store.dispatch(actionTypes.LOAD_TASKS_FROM_LOCAL_STORAGE);
  },
};
</script>

<style lang="scss">
@import 'reset-css';

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
