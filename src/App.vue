<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <div class="body">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.body {
  position: relative;
  top: 71px;
}
</style>
