<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import Check from '../assets/icons/Check.vue'
import Arrow from '../assets/icons/Arrow.vue'
</script>
<template>
  <section>
    <h1 class="left">
      Get Paid As A<br />
      <span>Property Shareholder</span><br />
      In 12 Months
    </h1>

    <div class="right">
      <p class="paragraph">
        A NEW way you can join the train to get paid from a House Funding Plan for as low as
        N100,000 and get up to <span>45%</span> Return in 12months time.
      </p>
      <div class="inline">
        <p v-for="value in ['Invest what you want', 'Get paid quickly']" :key="value">
          <span><Check /></span>{{ value }}
        </p>
      </div>
    </div>
    <RouterLink to="/investments"
      >Invest now<span class="arrow"><Arrow /></span
    ></RouterLink>
  </section>
  <div class="image"></div>
</template>
<style scoped>
section {
  background-image: url('../assets/hero.png');
  height: max-content;
  padding: 5rem 3rem;
  width: 100%;
  background-color: #052a40;
  display: grid;
  grid-template-columns: 50% 50%;
}
.left,
.right {
  color: #fff;
}
.left {
  font-weight: bold;
  font-size: 3rem;
}

.paragraph {
  text-align: end;
}
.inline {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
}
h1 span,
.paragraph span {
  color: var(--vt-c-text-success);
}
.right {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

a {
  all: unset;
  cursor: pointer;
  border: 2px solid #fff;
  background: transparent;
  display: flex;
  padding: 0.6rem 1rem;
  font-family: 'Open Sans' !important;
  color: #fff;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 4px;
}
.arrow {
  margin-left: 1rem;
  margin: auto 0 auto 0.5rem;
}
@media screen and (max-width: 750px) {
  section {
    grid-template-columns: 100%;
    text-align: center;
    gap: 1rem;
  }
  a {
    margin: 0 auto;
  }
  .inline {
    justify-content: center;
  }
  .paragraph {
    text-align: center;
  }
}
@media screen and (max-width: 520px) {
  section {
    height: max-content;
  }
  .left {
    font-size: 2.5rem;
  }
  .inline {
    flex-direction: column;
    margin: 0 auto;
    gap: 0.5rem;
  }
}
.image {
  background-image: url('../assets/Image.png');
  height: 400px;
  width: 100%;
}
</style>
