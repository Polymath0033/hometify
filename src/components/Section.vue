<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <section class="section">
    <article class="article">
      <div class="paid">Get paid quickly</div>
      <h1>The Smart Way to Get your Money Working for you</h1>
    </article>

    <article class="article" v-for="article in arrays" :key="article.title">
      <img :src="`/src/assets/icons/${article.icon}.svg`" class="icon" :alt="article.icon" />
      <div class="content">
        <h3>{{ article.title }}</h3>
        <p>{{ article.content }}</p>
      </div>
    </article>
  </section>
</template>
<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'

interface Section {
  title: string
  icon: string
  content: string
}
const arrays: Ref<Section[]> = ref([
  {
    title: 'Amazing Real Estate offers',
    icon: 'home',
    content: 'Invest automatically, earn more, and get latest investment packages on the go.'
  },
  {
    title: 'Track your investments',
    icon: 'user',
    content:
      'Keep track of your investments in one place. Get investment updates on the property package selected.'
  },
  {
    title: '100% secure',
    icon: 'path',
    content: 'Invest automatically, earn more, and get latest investment packages on the go.'
  },
  {
    title: 'Get Returns',
    icon: 'thumb',
    content: 'Access smart portfolios designed by experts, that adjust as you and your money grow.'
  }
])
</script>
<style scoped>
.section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  padding: 2rem 4rem;
}
.paid {
  color: rgba(54, 179, 126, 1);
  background: #ebf7f2;
  width: fit-content;
  border-radius: 15px;
  font-weight: bold;
  padding: 0.2rem 1rem;
}
.article h1,
.article h3 {
  color: var(--vt-c-text-dark);
  font-weight: 700;
}
.article:first-child {
  flex-direction: column;
  grid-row: 1 / span 2;
}
.article {
  display: flex;
  gap: 1rem;
}
.content {
  display: grid;
  gap: 0.5rem;
}
.article h1 {
  font-size: 1.8rem;
}

.icon {
  padding: 0.5rem;
  height: max-content;
  /* opacity: 0.2; */
}
@media screen and (max-width: 750px) {
  .section {
    grid-template-columns: 1fr 1fr;
    padding: 2rem 3rem;
  }
  .article:first-child {
    grid-column: 1 / span 2;
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
  .paid {
    margin: 0 auto;
  }
}
@media screen and (max-width: 520px) {
  .section {
    grid-template-columns: 100%;
    padding: 2rem;
  }
  .article:first-child {
    grid-column: 1 / span 1;
    width: 100%;
  }
}
</style>
