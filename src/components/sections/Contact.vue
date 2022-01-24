<template>
  <section class="contact section bd-container" id="contact">
    <div class="contact__container bd-grid">
      <div class="contact__data">
        <span class="section-subtitle contact__initial"> Let's talk </span>
        <h2 class="section-title contact__initial">Contact us</h2>
        <p class="contact__description">If you want to reserve a table</p>
      </div>

      <div class="contact__button">
        <a href="#" class="button">Contact us now</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.contact__container {
  text-align: center;
}

.contact__description {
  margin-bottom: var(--m-3);
}

@media screen and (min-width: 576px) {
  .contact__container,
  .contact__initial {
    text-align: initial;
  }

  .contact__container {
    grid-template-columns: 1.75fr 1fr;
    align-items: center;
  }

  .contact__button {
    justify-self: center;
  }
}
</style>
