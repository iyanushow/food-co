<template>
  <a class="scrollTop" :class="{ 'scroll-top': changeHeader }" id="scroll-top">
    <box-icon name="chevron-up" class="scrollIcon" @click="scrollToTop"></box-icon>
  </a>
</template>

<script>
import useScroll from './composables/useScroll';

export default {
  setup() {
    const { changeScroll } = useScroll(560);

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      changeHeader: changeScroll,
      scrollToTop,
    };
  },
};
</script>

<style>
.scrollTop {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background: #069c5480;
  border-radius: 4px;
  z-index: var(--z-tooltip);
  transition: 0.4s;
  visibility: hidden;
}

.scrollTop:hover {
  background: var(--main-alt);
}

.scrollIcon {
  font-size: 1.2rem;
  fill: var(--body-color);
}

.scroll-top {
  visibility: visible;
  bottom: 1rem;
}
</style>
