<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import useNaira from '../composable/use-naira'
import Icon from '../assets/icons/Icon.vue'
import DateIcon from '../assets/icons/DateIcon.vue'
import UsersIcon from '../assets/icons/UsersIcon.vue'
import BedIcon from '../assets/icons/BedIcon.vue'
const conversion = useNaira()
defineProps<{
  title: string
  rate: number
  tenure: number
  unit: number
  property_type: string
  location: string
}>()
let num: Ref<number> = ref(1)
</script>
<template>
  <article class="article">
    <div class="article-left">
      <div>
        <h1>{{ title }}</h1>
        <span class="rate">Get {{ rate }}% Return of Investment in {{ tenure }} months</span>
      </div>
      <div class="detail">
        <div>
          <i><Icon /></i>
          <h5>{{ location }}</h5>
          <span>Location</span>
        </div>
        <div>
          <i><BedIcon /></i>
          <h5>{{ property_type }}</h5>
          <span>Property Type</span>
        </div>
        <div>
          <i><UsersIcon /></i>
          <h5>{{ rate }}%</h5>
          <span>Return of investment</span>
        </div>
        <div>
          <i><DateIcon /></i>
          <h5>{{ tenure }}months tenure</h5>
          <span>Investment tenure</span>
        </div>
      </div>
      <span>
        Buying real estate investment with a fraction of the value, from the comfort of your room,
        with your mobile device and enjoying passive income is the easiest way to acquire, store and
        preserve wealth for yourself and your generation.
      </span>
      <span
        >The design of The Hometify shows where we come from and where our roots are, but it also
        shows the direction of our thinking and how we see the future – as a perfect harmony of
        traditional values, technology and family comforts. Every detail is well thought out and
        designed to be unmistakable from the very first moment. Only a few will ever get to possess
        The Châteaux as their own. None of them will ever forget.</span
      >
    </div>
    <div class="article-right">
      <div class="form">
        <h1>
          N{{ Number(unit).toLocaleString('en-NG', { currency: 'NGN' })
          }}<span class="unit">/ units</span>
        </h1>
        <div class="unit-box">
          <h4>Units</h4>
          <div>
            <button :disabled="num <= 1" v-on:click="num--">-</button>
            <p class="rate_">{{ num }}</p>
            <button v-on:click="num++">+</button>
          </div>
        </div>
        <div class="flex">
          <span>Return of Investment</span><span>{{ conversion.amountNaira(200000) }}</span>
        </div>
        <div class="flex">
          <h5>
            Return of Investment <span>x{{ num }}</span>
          </h5>
          <span>{{ conversion.amountNaira(200000) }}</span>
        </div>
        <div class="flex">
          <h5>Total</h5>
          <h5>{{ conversion.amountNaira(200000) }}</h5>
        </div>
        <a>Invest now</a>
      </div>
      <div class="logo">
        <img src="../assets/logo_2.png" />
        <span>Insurance covers: project constructions, land and asset procurements </span>
      </div>
    </div>
  </article>
</template>
<style scoped>
.article {
  padding: 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
}
.article-left {
  display: grid;
  gap: 1.5rem;
}
.article span {
  font-family: 'Open Sans';
  color: #465969;
  font-size: 0.8rem;
  line-height: 1.6;
}
.detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  row-gap: 1.2rem;
}
.detail i {
  float: left;
  margin-right: 0.7rem;
}
.detail i {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(58, 51, 53, 0.04);
  border-radius: 4px;
}
.detail h5 {
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 0.1rem;
}
.article-right {
  display: grid;
  justify-items: right;
  gap: 1.3rem;
}
.form {
  background-color: rgba(250, 250, 250, 1);
  border-radius: 10px;
  padding: 2rem;
  width: 75%;
  float: right;
  display: grid;
  gap: 1.3rem;
}
.unit {
  font-weight: 500;
  font-size: 1rem !important;
  line-height: 1;
}
.unit-box {
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #465969;
  align-items: center;
  font-family: 'Inter' !important;
}
.unit-box div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.unit-box h4 {
  font-family: 'Inter' !important;
  color: rgba(58, 51, 53, 1);
  font-size: 0.8rem;
}
.unit-box button {
  all: unset;
  border-radius: 50%;
  border: 1px solid #465969;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter' !important;
  cursor: pointer;
}
.active {
  cursor: pointer;
}
.rate_ {
  font-weight: bold;
  font-size: 0.8rem;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.flex h5 {
  font-family: 'Inter' !important;
  color: #3a3335;
}
.form a {
  all: unset;
  padding: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  background-color: #019b64;
}
.logo {
  width: 75%;
  display: flex;
}
.logo img {
  float: left;
  height: max-content;
}
@media screen and (max-width: 750px) {
  .article {
    grid-template-columns: 100%;
    gap: 2rem;
  }
  .article-right {
    justify-items: left;
  }
}
@media screen and (max-width: 520px) {
  .detail {
    grid-template-columns: 100%;
  }
  .form,
  .logo {
    width: 100%;
  }
}
</style>
