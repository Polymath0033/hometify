<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <RouterLink to="/"><img src="../assets/logo.svg" alt="Hometify" /></RouterLink>
    <nav>
      <ul>
        <li><RouterLink to="/investments">Investments</RouterLink></li>
        <li><RouterLink to="/about-us">About us</RouterLink></li>
        <li><RouterLink to="/faq">FAQ</RouterLink></li>
        <li><RouterLink to="/contact-us">Contact us</RouterLink></li>
      </ul>
    </nav>
    <div class="div">
      <div class="buttons">
        <router-link to="/log-in">Login</router-link>
        <router-link to="/sign-up">Signup</router-link>
      </div>
      <div role="button" class="hambuger">
        <div v-for="index in 3" :key="index"></div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header,
ul,
.buttons {
  display: flex;
  justify-content: space-between;
}
img {
  width: 80%;
}
header {
  position: fixed;
  width: 100%;
  background-color: white;
  padding: 1rem 2rem;
  /* box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1); */
  align-items: center;
  z-index: 100;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
}
li {
  font-weight: bold;
}
li a,
.buttons a {
  all: unset;
  cursor: pointer;
  color: var(--vt-c-text-dark);
}
.buttons {
  gap: 1rem;
}
.div {
  display: flex;
  gap: 1rem;
}
.buttons a {
  padding: 0.4rem 1.4rem;
  color: var(--vt-c-text-light);
  display: flex;
  font-weight: 400;
  transition: all 0.3s;
  border-radius: 8px;
}
.buttons a:first-child:hover {
  background-color: var(--vt-c-text-success);
  color: #fff;
  border: 2px solid var(--vt-c-text-success);
}
.buttons a:last-child:hover {
  color: var(--vt-c-text-light);
  background-color: transparent;
  border: none;
}
.buttons a:last-child {
  background-color: var(--vt-c-text-success);
  color: #fff;
  border: 2px solid var(--vt-c-text-success);
}
.hambuger {
  display: none;
  gap: 0.2rem;
  cursor: pointer;
  margin: auto;
}
.hambuger div {
  width: 30px;
  background-color: var(--vt-c-text-success);
  height: 4px;
}
nav a.router-link-exact-active {
  color: var(--vt-c-text-light);
}
@media screen and (max-width: 860px) {
  ul {
    gap: 1rem;
  }
}
@media screen and (max-width: 750px) {
  nav {
    display: none;
  }
  .hambuger {
    display: grid;
  }
}
@media screen and (max-width: 420px) {
  img {
    width: 100%;
  }
}
</style>
