<template>
  <section>
    <img src="../assets/Images.png" alt="background" />
    <article class="article">
      <h6>how it works</h6>
      <h1>
        Creating Access to<br />
        Estate Opportunities
      </h1>
      <span
        >We source great landed properties across Nigeria and build out fascinating buildings and
        then sell them at good margins
      </span>
      <ul class="list">
        <li>
          <h4>Sourcing and building great properties</h4>
          <span
            >We have strong expertise in determining promising locations for our property
            acquisitions and constructions.
          </span>
        </li>
        <li>
          <h4>Access to Real Estate Sales Deals</h4>
          <span
            >The experience and skills of our team give us access to major sale deals and
            opportunities in the market.</span
          >
        </li>
      </ul>
    </article>
  </section>
</template>
<style scoped>
section {
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
img {
  width: 100%;
}
.article {
  display: grid;
  gap: 0.5rem;
}
.article h1 {
  color: var(--vt-c-text-dark);
  font-size: 2rem;
}
.article h4 {
  font-size: 1.1rem;
}
.article h6 {
  text-transform: uppercase;
  font-family: 'Red Hat Display';
  color: rgba(70, 89, 105, 1);
}
.article span {
  font-family: 'Inter';
  color: rgba(70, 89, 105, 1);
}
.list {
  list-style-type: none;
}
.list span {
  font-size: 1rem;
}
.list li {
  position: relative;
  padding-left: 2.8rem;
}
.list li::before {
  content: url('../assets/🎨Colors.svg');
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 750px) {
  section {
    grid-template-columns: 100%;
    text-align: center;
    padding: 2rem;
  }
  .article {
    gap: 1rem;
  }
  img {
    display: none;
  }
  .list li {
    padding-left: 2rem;
    text-align: start;
  }
}
</style>
