<template>
  <section class="home">
    <div class="home__container container bd-grid">
      <div class="hero__data">
        <h1 class="hero__title">FoodCo</h1>
        <h2 class="hero__subtitle">
          It's an entire party <br />
          in your mouth.
        </h2>
        <a href="#" class="button">View Menu </a>
      </div>

      <img src="/assets/home.png" alt="" class="hero__image" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home__container {
  height: calc(100vh - var(--header-height));
  align-content: center;
}

.hero__title {
  font-size: var(--font__lg);
  color: var(--main-color);
  margin-bottom: var(--m-1);
}
.hero__subtitle {
  font-size: var(--font__heading);
  color: var(--title);
  margin-bottom: var(--m-4);
}

.hero__image {
  width: 300px;
  justify-self: center;
}

.hero__data {
  text-align: center;
}

@media screen and (min-width: 576px) {
  .home__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
}

@media screen and (min-width: 768px) {
  .home__container {
    height: 100vh;
    justify-items: center;
  }
}

@media screen and (min-width: 960px) {
  .home__img {
    width: 500px;
  }
}
</style>
