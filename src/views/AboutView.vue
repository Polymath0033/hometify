<script setup lang="ts">
import Play from '../assets/icons/Play.vue'
</script>
<template>
  <main class="about">
    <div class="hero">
      <article class="article">
        <div>
          <h1 class="title">Our Story</h1>
          <p>
            With an increasing population of <strong>Over 14 million in Lagos State,</strong> the
            need for housing property is on the rise.
          </p>
          <p>
            Having discovered this, our team of experts came together to build affordable housing to
            cater to this INCREASING demand in key places in Lagos state.
          </p>
          <p>
            And with this, you don't have to be wealthy or a landowner to profit from this DEMAND.
          </p>
        </div>
      </article>
    </div>
    <article class="flex first">
      <div>
        <h1>Now, you can start with the little you have</h1>
        <p>
          You can partner with us today to be a property shareholder by only funding a project and
          GET profitable returns up to 45% in 12 months.
        </p>
      </div>

      <div class="side_right">
        <div class="inner">
          <i><Play /></i>
          <h4>Standard Package</h4>
          <br />
          <p>100k | Return 35%</p>
        </div>
      </div>
    </article>
    <article class="flex">
      <div class="left-side">
        <img src="../assets/customer.png" />
      </div>
      <aside>
        <h1>Where Do You Come In?</h1>
        <p>• Be a property shareholder, all by funding any of the available packages</p>
        <p>
          • In 12 months,
          <strong>you get your money back plus up to a 45 % return on your investment,</strong>s
          depending on your chosen package.
        </p>
      </aside>
    </article>
    <article class="flex about">
      <div>
        <h1>Our team is a network of talented professionals:</h1>
        <ul>
          <li>
            <p>
              <strong>Town planners:</strong> to help provide us with records of areas of high
              housing Search before developing our structures.
            </p>
          </li>
          <li>
            <p>
              <strong> High-level Civil Engineers,</strong> Quantity Surveyors, Builders, and
              Architects for the actualization of our mapped out plan and solid structure.
            </p>
          </li>
          <li>
            <p>
              <strong>Over 5,000 Realtors</strong> to help market these properties to the right
              buyers across the world.
              <strong>With this, you're sure of getting paid when due.</strong>
            </p>
          </li>
        </ul>
      </div>
      <div class="about-right"></div>
    </article>
  </main>
</template>

<style scoped>
.hero {
  background-image: url('../assets/about-bg.png');
  height: max-content;
  width: 100%;
}
.article {
  width: 55%;
  position: relative;
  top: 2rem;
  left: 2rem;
  z-index: 1;
  display: flex;
}
.article div {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding: 3rem 3rem 3rem 2.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  border-radius: 12px;
}
.article::after {
  content: '';
  position: absolute;
  background-color: #17647c;
  transform: translate(20px, 20px);
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.hero h1 {
  color: #019b64;
}
.hero strong {
  font-family: inherit;
  font-weight: 600;
}
.hero p,
.flex p {
  font-family: 'Inter';
  line-height: 1.5;
  color: #0f2137;
}
.flex {
  display: grid;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 4rem;
  grid-template-columns: 45% 40%;
  gap: 5rem;
}
.first {
  margin-top: 8rem !important;
}
.side_right {
  background-image: url('../assets/side-bg.png');
  background-size: contain;
  border-radius: 12px;

  position: relative;
  height: 260px;
}
.inner {
  position: absolute;
  top: 2rem;
  left: -3rem;
  z-index: 1;
  background-color: #17647c;
  border-radius: 12px;
  width: max-content;
  padding: 1rem;
}
.flex i {
  float: left;
  margin-right: 0.6rem;
}
.flex h4,
.inner p {
  color: #fff;
}
.inner h4 {
  float: right;
}
.inner p {
  opacity: 0.6;
  font-size: 14px;
  margin-top: -0.6rem;
}
.flex aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -2rem;
}
.flex aside strong {
  color: #019b64;
  font-family: inherit;
}
.flex aside p {
  color: #343d48;
}
.left-side img {
  width: 100%;
}
.about {
  background-color: #f9fafc;
}
ul {
  list-style: none;
  display: grid;
  gap: 1rem;
}
ul p {
  font-size: 14px;
}
.about-right {
  background-image: url('../assets/about-img.png');
  width: 100%;
  display: flex;
  background-size: cover;
}
.about h1 {
  margin-bottom: 2rem;
  font-weight: bold;
}
ul li {
  display: flex;
  gap: 0.6rem;
}
ul li::before {
  content: url('../assets/mark.svg');
}
ul li strong {
  font-family: 'Inter';
}
@media screen and (max-width: 750px) {
  .article {
    width: 75%;
  }
}
@media screen and (max-width: 520px) {
  .article {
    width: 85%;
    left: 0;
    margin: 0 auto;
  }
  .flex {
    grid-template-columns: 100%;
  }
  .inner {
    right: -1rem;
    left: auto;
  }
}
</style>
