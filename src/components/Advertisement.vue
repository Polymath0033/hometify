<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import Icon from '../assets/icons/Icon.vue'
/*import { reactive } from 'vue'
import type { Ref } from 'vue'
interface Advertisement {
  img: string[]
  title: string
  investment: Number
  return: Number
  increase: Number
}
const array: Ref<Advertisement[]> = reactive([
  {
    img: ['image_1', 'image_2'],
    title: 'Elegante Villa',
    investment: 100000,
    return: 135000,
    increase: 35
  },
  {
    img: ['image_3', 'image_4'],
    title: 'Conforto Villa',
    investment: 250000,
    return: 350000,
    increase: 40
  },
  {
    img: ['image_5'],
    title: 'Luxo Villa',
    investment: 500000,
    return: 710000,
    increase: 42
  },
  {
    img: ['image_6'],
    title: 'Eficiência Villa',
    investment: 1000000,
    return: 1450000,
    increase: 45
  }
])*/
</script>
<template>
  <section class="section">
    <h1>
      Still Thinking Of A Huge Sum<br />
      To Own A Property Of Yours?
    </h1>
    <h3>
      Not To Worry. Our packages got you covered and you can start<br />
      EARNING as a property shareholder with that little fund of yours.
    </h3>
    <div class="div">
      <i><Icon /> </i>
      <span>
        <p>All Properties located:</p>
        <h5>Maryland, Lagos.</h5>
      </span>
    </div>
    <article>
      <div class="container">
        <div class="image">
          <img src="../assets/image_1.png" alt="imag" />
          <img src="../assets/image_1.png" alt="imag" />
        </div>
        <h6>Title</h6>
        <div class="investment">
          <p>You will invest:</p>
          <h4>Amount</h4>
        </div>
        <div class="return">
          <p></p>
          <h4>Amount</h4>
        </div>
        <span>increase</span>
        <button>button</button>
      </div>
      <div class="container">
        <div class="image">
          <img src="../assets/image_1.png" alt="imag" />
        </div>
        <h6>Title</h6>
        <div class="investment">
          <p>You will invest:</p>
          <h4>Amount</h4>
        </div>
        <div class="return">
          <p>You will be getting:</p>
          <h4>Amount</h4>
        </div>
        <span>increase</span>
        <button>button</button>
      </div>
    </article>
  </section>
</template>
<style scoped>
.section {
  background-color: rgba(9, 31, 64, 1);
  width: 100%;
  height: max-content;
  padding: 3.5rem 2rem;
}
.section h1,
.section h3 {
  font-weight: 700;
  text-align: center;
}
.section h1 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
}
.section h3 {
  color: #b0b4b2;
  margin: 1.5rem 0;
}
.div {
  text-align: center;

  width: max-content;
  margin: 2rem auto;
  display: flex;
}
.div i {
  position: relative;
  float: left;
}
.div h5 {
  color: #ffffff;
}
.div p {
  color: #b0b4b2;
  margin-bottom: 0.4rem;
}
.div span {
  text-align: start;
  margin-left: 1rem;
}
.section article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.container {
  background-color: #ffff;
}
.image {
  width: 100%;
}
.image img {
  width: 100%;
}
</style>
