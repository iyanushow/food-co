<template>
  <section class="app section container">
    <div class="app__container bd-grid">
      <div class="app__data">
        <span class="section-subtitle app__initial">App</span>
        <span class="section-subtitle"> Our app is available </span>
        <p class="app__description">Find our application, and be able to make orders easily, track your delivery and so much more</p>

        <div class="app__stores">
          <a href="#">
            <img src="" alt="assets/img/app1.png" class="app__store" />
          </a>
          <a>
            <img src="assets/img/app2.png" alt="" class="app__store" />
          </a>
        </div>

        <img src="assets/img/movil-app.png" alt="" class="app__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.app__data {
  text-align: center;
}

.app__description {
  margin-bottom: var(--m-5);
}

.app__stores {
  margin-bottom: var(--m-4);
}

.app__store {
  width: 120px;
  margin: 0 var(--m-1);
}

.app__img {
  width: 230px;
  justify-self: center;
}

@media screen and (min-width: 576px) {
  .app__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .app__data,
  .app__initial {
    text-align: initial;
  }

  .app__img {
    width: 380px;
    order: -1;
  }
}

@media screen and (min-width: 768px) {
  .app__store {
    margin: 0 var(--m-1) 0 0;
  }
}

@media screen and (min-width: 960px) {
  .app__container {
    column-gap: 7rem;
  }
}
</style>
