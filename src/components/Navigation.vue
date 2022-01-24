<template>
  <ScrollTop />
  <header :class="{ 'scroll-header': changeHeader }">
    <nav class="nav container">
      <router-link to="/" class="nav__logo">FoodCo</router-link>
      <div class="nav__menu" :class="{ showMenu: isMenuOpen }">
        <ul class="nav__list">
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" :class="{ active_link: active[0] }" href="#about">Home</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" :class="{ active_link: active[1] }" href="#about">About</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" :class="{ active_link: active[2] }" href="#services">Services</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" :class="{ active_link: active[3] }" href="#menu">Menu</a>
          </li>
          <li class="nav__item" @click="toggleMenu">
            <a class="nav__link" :class="{ active_link: active[4] }" href="#contact">Contact</a>
          </li>

          <ThemeChanger />
        </ul>
      </div>

      <Burger @showMenu="toggleMenu" />
    </nav>
  </header>
</template>

<script>
import Burger from './Burger.vue';
import ScrollTop from './ScrollTop.vue';
import ThemeChanger from './ThemeChanger.vue';
import useScroll from './composables/useScroll';
import { reactive, ref, toRefs } from '@vue/reactivity';
export default {
  components: {
    Burger,
    ScrollTop,
    ThemeChanger,
  },

  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    //ACTIVE STATE OF LINKS
    let linkRefs = [];
    const activeState = reactive({ active: Array.from({ length: 5 }, (x, i) => i === 0) });

    const { changeScroll } = useScroll(200);

    return {
      //  DATE
      isMenuOpen,
      changeHeader: changeScroll,
      ...toRefs(activeState),

      // METHODS
      toggleMenu,
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
  color: var(--main-color);
}

.showMenu {
  top: var(--header-height);
}

/* Active menu  */
.active_link {
  color: var(--main-color);
}

.scroll-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 768px) {
  .nav__item {
    margin-left: var(--m-5);
    margin-bottom: 0;
  }

  .nav__toggle {
    display: none;
  }
}
</style>
