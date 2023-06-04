<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
  <Header />
  <div class="body">
    <slot name="main">
    </slot>
  </div>
  <Footer />
</template>
<style scoped>
.body {
  position: relative;
  top: 71px;
}
</style>