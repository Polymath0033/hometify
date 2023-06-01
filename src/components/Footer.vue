<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import Google from '../assets/icons/Google.vue'
import Twitter from '../assets/icons/Twitter.vue'
import LinkedIn from '@/assets/icons/LinkedIn.vue'
import Instagram from '@/assets/icons/Instagram.vue'
</script>
<template>
  <footer>
    <div class="left">
      <img src="../assets/logo.png" />
      <p>
        We make real estate investments accessible to everyone in a way that is simple, secure and
        profitable. We achieve this by practicing excellence, continually innovating, conducting
        business with integrity and always putting our customers first.
      </p>
    </div>
    <div class="right">
      <h2>Contact us</h2>
      <h4>hometify@gmail.com</h4>
      <h4>+2349094773626,08073652643</h4>
      <div class="icons">
        <a><Google /></a><a><Twitter /></a><a><instagram /></a><a><linked-in /></a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  padding: 9rem 4rem 4rem 4rem;
  display: flex;
  justify-content: space-between;
}
.right h4:first-of-type {
  color: #019b64;
}
.right h4 {
  display: flex;
}
.right h4 {
  color: #465969;
}
.right h2 {
  color: #0f0d2e;
}
/* .left {
  float: left;
} */
footer p {
  font-family: 'Inter';
  color: #465969;
  width: 50%;
  margin-top: 1rem;
}
.right {
  display: grid;
  gap: 0.7rem;
}
.icons {
  display: flex;
  gap: 0.5rem;
}
.icons a {
  all: unset;
  border-radius: 50%;
  background-color: #eff1f3;
  padding: 0.5rem;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 750px) {
  footer {
    gap: 2rem;
    padding: 9rem 2rem 2rem 2rem;
    flex-direction: column;
    text-align: start;
  }
  .left p {
    width: 100%;
  }
}
</style>
