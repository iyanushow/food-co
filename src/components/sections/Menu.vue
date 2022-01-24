<template>
  <section class="menu section container" id="menu">
    <span class="section-subtitle"> Specials </span>
    <h2 class="section-title">This Week's Menu</h2>
  </section>

  <div class="menu__container bd-grid">
    <div class="menu__content">
      <img src="/assets/img/plate1.png" alt="" class="menu__img" />
      <h3 class="menu__name">Barbeque Salad</h3>
      <span class="menu_detail"> Western style barbeque salad </span>
      <span class="menu__price"> #22.00 </span>
      <a href="#" class="button menu__button">
        <box-icon name="cart-alt"></box-icon>
      </a>
    </div>

    <div class="menu__content">
      <img src="/assets/img/plate2.png" alt="" class="menu__img" />
      <h3 class="menu__name">Salad with fish</h3>
      <span class="menu_detail"> Fresh cut salad with fish </span>
      <span class="menu__price"> #16.00 </span>
      <a href="#" class="button menu__button">
        <box-icon name="cart-alt"></box-icon>
      </a>
    </div>

    <div class="menu__content">
      <img src="/assets/img/plate3.png" alt="" class="menu__img" />
      <h3 class="menu__name">Salad delight</h3>
      <span class="menu_detail"> Pure eastern salad dish </span>
      <span class="menu__price"> #9.50 </span>
      <a href="#" class="button menu__button">
        <box-icon name="cart-alt"></box-icon>
      </a>
    </div>
  </div>
</template>

<script>
import 'boxicons';

export default {};
</script>

<style scoped>
.menu__container {
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}

.menu__content {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--container);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
  padding: 0.75rem;
}

.menu__img {
  width: 100px;
  align-self: center;
  margin-bottom: var(--m-2);
}
.menu__name {
  font-size: var(--font-default);
}
.menu__detail,
.menu__price {
  font-size: var(--font-small);
}

.menu__detail {
  margin-bottom: var(--m-1);
}

.menu__button {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  padding: 0.625rem, 0.813rem;
  border-radius: 0.5rem 0;
}

@media screen and (min-width: 768px) {
  .menu__container {
    margin-top: var(--m-6);
  }

  .menu__container {
    grid-template-columns: repeat(3, 210px);
    column-gap: 4rem;
  }

  .menu_content {
    padding: 1.5rem;
  }

  .menu__img {
    width: 130px;
  }
}
</style>
