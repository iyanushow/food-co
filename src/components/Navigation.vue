<template>
  <header>
    <nav class="nav container">
      <router-link to="/" class="nav__logo">FoodCo</router-link>
      <div class="nav__menu" :class="{ showMenu: isMenuOpen }">
        <ul class="nav__list">
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" to="#about">Home</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" to="#about">About</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" to="#services">Services</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" to="#menu">Menu</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" to="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <Burger @showMenu="toggleMenu" />
    </nav>
  </header>
</template>

<script>
  import { reactive, ref, toRefs } from "@vue/reactivity";
  import Burger from "./Burger.vue";
  export default {
    components: {
      Burger,
    },

    setup() {
      const isMenuOpen = ref(false);
      const activeState = reactive({ active: Array.from({ length: 5 }) });
      const toggleMenu = () => {
        console.log("here now");
        isMenuOpen.value = !isMenuOpen.value;
      };

      return {
        isMenuOpen,
        toggleMenu,
        ...toRefs(activeState),
      };
    },
  };
</script>

<style scoped>
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background: var(--body-color);
  }

  nav {
    max-width: 1024px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    .nav__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      padding: 1.5rem 0 1rem;
      text-align: center;
      background: var(--body-color);
      transition: 0.4s;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      z-index: var(--z-fixed);
    }
  }

  .nav__item {
    margin-bottom: var(--m-2);
  }
  .nav__link,
  .nav__logo,
  .nav__toggle {
    color: var(--text-color);
    font-weight: var(--font-normal);
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .showMenu {
    top: var(--header-height);
  }

  /* Active menu  */
  .active-link {
    color: var(--first-color);
  }
</style>
