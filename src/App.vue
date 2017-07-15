<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
        <router-view></router-view>
    </div>

  </div>
</template>

<script>

import Header from './components/templates/Header.vue'

export default {
  components : {
    'app-header' : Header
  }
}
</script>

<style>

</style>
