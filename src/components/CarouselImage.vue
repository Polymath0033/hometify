<script setup lang="ts">
import ArrowLeft from '../assets/icons/ArrowLeft.vue'
import ArrowRight from '../assets/icons/ArrowRight.vue'
const getImageUrls = (name: any) => {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href
}
defineProps<{ left: string; middle: string; right: string }>()
defineEmits<{ (e: 'next_'): void; (e: 'prev_'): void }>()
</script>
<template>
  <section class="carousel">
    <div class="left" :style="{ 'background-image': `url(${getImageUrls(left)})` }">
      <button v-on:click="$emit('prev_')">
        <arrow-left color_="#908E8E"></arrow-left>
      </button>
    </div>
    <div class="middle" :style="{ 'background-image': `url(${getImageUrls(middle)}` }"></div>
    <div class="right" :style="{ 'background-image': `url(${getImageUrls(right)}` }">
      <button v-on:click="$emit('next_')">
        <arrow-right color_="#908E8e"></arrow-right>
      </button>
    </div>
  </section>
</template>
<style scoped>
.carousel {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  gap: 0.8rem;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.left {
  justify-content: flex-start;
  padding-left: 1rem;
}
.right {
  justify-content: flex-start;
}
.left,
.right {
  display: flex;
  align-items: center;
}
.left,
.middle,
.right {
  border-radius: 8px;
}
.right {
  padding-right: 2rem;
  justify-content: flex-end;
}
.left button,
.right button {
  all: unset;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
}
</style>
