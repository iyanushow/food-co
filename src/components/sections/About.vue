<template>
  <div class="about section container" id="about">
    <div class="about__container bd-grid">
      <div class="about__data">
        <span class="section-subtitle">About us</span>
        <h2 class="section-title">
          We make the best <br />
          tasty food
        </h2>
        <p class="about_-description">Legendary cuisine to satisfy your cravings</p>
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
</style>
