<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import Layout from './Layout.vue'
import type Investment from '@/types/Investment'
import { useStore } from '../store/index'
import FAQ from '../components/FAQ.vue'
import CarouselImage from '@/components/CarouselImage.vue'
import Detail from '@/components/Detail.vue'
const store = useStore()

console.log(store.state.investment)
const carousel_: Ref<Investment[]> = ref([
  {
    left: 'left_1',
    middle: 'middle_1',
    right: 'right_1',
    title: 'Hometify Standard Package',
    rate: 35,
    location: 'MaryLand, Lagos',
    tenure: 12,
    property_type: '2 Bedroom Terraces',
    unit: 100000
  },
  {
    left: 'left_2',
    middle: 'middle_2',
    right: 'right_2',
    title: 'Elegante Villa Investment Package',
    rate: 35,
    location: 'Maryland, Lagos',
    tenure: 12,
    property_type: '2 Bedroom Terraces',
    unit: 100000
  },
  {
    left: 'left_3',
    middle: 'middle_3',
    right: 'right_3',
    title: 'Elegante Villa Investment Package',
    rate: 35,
    location: 'Maryland, Lagos',
    tenure: 12,
    property_type: '2 Bedroom Terraces',
    unit: 100000
  },
  {
    left: 'left_upper',
    middle: 'middle_4',
    right: 'right_4',
    title: 'Elegante Villa Investment Package',
    rate: 35,
    location: 'Maryland, Lagos',
    tenure: 12,
    property_type: '2 Bedroom Terraces',
    unit: 100000
  }
])
const faqs: { question: string; answer: string }[] = [
  {
    question: 'How does investing with Hometify differ from buying homes directly?',
    answer:
      'Hometify has streamlined the process to make building homes easier and more efficient. We have trusted partners who execute our projects and we getting amazing returns for you through acquisitions'
  },
  { question: 'How do I get my  return of investment  after 9 months?', answer: '' },
  { question: 'Are my investment insured?', answer: '' },
  {
    question: 'What’s the process to investing more than once?',
    answer: ''
  },
  { question: 'How do i track my investments?', answer: '' }
]
let current: Ref<number> = ref(0)

const next_ = () => {
  const index = current.value < carousel_.value.length - 1 ? current.value + 1 : 0
  current.value = index
}

const prev_ = () => {
  const index = current.value > 0 ? current.value - 1 : carousel_.value.length - 1
  current.value = index
}
</script>
<template>
  <Layout>
    <template #main>


      <div v-for="(carousel, index) in carousel_" :key="carousel.left" v-show="current === index">
        <carousel-image :middle="carousel.middle" :left="carousel.left" :right="carousel.right" @next_="next_"
          @prev_="prev_"></carousel-image>
        <Detail :title="carousel.title" :location="carousel.location" :unit="carousel.unit"
          :property_type="carousel.property_type" :tenure="carousel.tenure" :rate="carousel.rate" />
      </div>
      <FAQ :faqs="faqs" />
    </template>
  </Layout>
</template>
<style scoped></style>
