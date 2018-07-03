<template>
  <div id="app">
    <div id="nav" v-if="!embedded">
      <router-link to="/">Explore</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/event-types">Event Types</router-link> |
      <router-link to="/subjects">Subjects</router-link> |
      <router-link to="/subject-types">Subject Types</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  // Props can get populated by setting data attributes on the root
  // element
  props: {
    // Toggles navigation chrome.
    embedded: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
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
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
