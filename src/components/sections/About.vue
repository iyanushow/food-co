<template>
  <div class="about section container" id="about">
    <div class="about__container bd-grid">
      <div class="about__data">
        <span class="section-subtitle about__initial">About us</span>
        <h2 class="section-title about__initial">
          We make the best <br />
          tasty food
        </h2>
        <p class="about__description">Legendary cuisine to satisfy your cravings</p>
        <a href="#" class="button">Explore History</a>
      </div>

      <img src="assets/about.jpg" alt="" class="about__img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about__data {
  text-align: center;
}
.about__description {
  margin-bottom: var(--m-3);
}
.about__img {
  width: 280px;
  border-radius: 0.5rem;
}

@media screen and (min-width: 576px) {
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .about__data,
  .about__initial {
    text-align: initial;
  }

  .about__img {
    width: 380px;
    order: -1;
  }
}

@media screen and (min-width: 960px) {
  .about__container {
    column-gap: 7rem;
  }
}
</style>
