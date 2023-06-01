<script setup lang="ts">
import FAQList from './UI/FAQList.vue'
import Arrow from '@/assets/icons/Arrow.vue'


defineProps<{ faqs: { question: string; answer: string }[] }>()
</script>
<template>
  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <ul>
      <FAQList
        v-for="faq in faqs"
        :key="faq.question"
        :faq="faq"
        :question="faq.question"
        :answer="faq.answer"
      />
    </ul>
    <button>
      See more<i><Arrow /></i>
    </button>
  </section>
</template>
<style scoped>
.faq {
  width: 100%;
  padding: 3rem 6rem;
  background-color: rgba(248, 249, 255, 1);
}
.faq h2 {
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
ul {
  list-style: none;
}
.faq button {
  all: unset;
  cursor: pointer;
  color: #ffffff;
  background-color: #019b64;
  text-align: center;
  padding: 0.6rem 0.9rem;
  margin: 1rem auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter' !important;
}
.faq button i {
  margin-left: 0.5rem;
}
@media screen and (max-width: 750px) {
  .faq {
    padding: 3rem;
  }
}
</style>
