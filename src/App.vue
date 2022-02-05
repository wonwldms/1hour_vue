<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <!-- <Home /> -->
      <router-view></router-view>
    </div>
    <div id="btn_main">
      <router-link to="/">"home" move! click me!</router-link> <br />
      <router-link to="/about">"about" move! click me!</router-link>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {

}
</style>
