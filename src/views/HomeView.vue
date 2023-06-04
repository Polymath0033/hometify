<script setup lang="ts">
import Layout from './Layout.vue'
import Hero from '../components/Hero.vue'
import Section from '../components/Section.vue'
import Advertisement from '../components/Advertisement.vue'
import HowItWorks from '../components/HowItWorks.vue'
import FAQ from '../components/FAQ.vue'

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What Is The Vision Of Hometify?',
    answer:
      'Our mapped out plan is to satisfy the increased demand for affordable property on sale; and in turn, enable individuals who have an interest in the real estate business but with limited resources to also..'
  },
  {
    question: 'Why Choose Housing Real Estate Business?',
    answer: ''
  },
  { question: 'Who Can Fund A Housing Plan? ', answer: '' },
  { question: 'How Do We Generate Our Income?', answer: '' },
  { question: 'Who Can Fund A Housing Plan? ', answer: '' }
]
</script>

<template>
  <Layout>
    <template #main>
      <main>
        <Hero />
        <Section />
        <Advertisement />
        <HowItWorks />
        <FAQ :faqs="faqs" />
      </main>
    </template>
  </Layout>
</template>
