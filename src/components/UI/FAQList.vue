<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
const tab: Ref<Boolean> = ref(false)
const toggleTab: () => boolean = () => (tab.value = !tab.value)
defineProps<{ question: string; answer: string }>()
</script>
<template>
  <li>
    <h5 :style="{ color: tab ? '#019b64' : '#0f0d2e' }">
      {{ question }}<button v-on:click="toggleTab">{{ tab === false ? '+' : '-' }}</button>
    </h5>
    <p v-if="tab === true">{{ answer }}</p>
  </li>
</template>
<style scoped>
li {
  background-color: #ffffff;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
}
h5 {
  position: relative;
  color: #019b64;
  font-weight: bold;
  /* font-size: 1.2rem; */
}
button {
  all: unset;
  position: absolute;
  right: 0;
  color: #0f0d2e;
  font-weight: bold;
  cursor: pointer;
}
p {
  color: #465969;
  margin-top: 0.5rem;
  font-family: 'Inter';
  font-size: 14px;
}
</style>
