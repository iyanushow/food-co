<template>
  <a href="" class="scrollTop" :class="{ 'scroll-top': changeHeader }" id="scroll-top">
    <box-icon name="chevron-up" class="scrollIcon"></box-icon>
  </a>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const changeHeader = ref(false);
    const windowOffset = ref(window.scrollY);

    watch(windowOffset, (newVal, oldVal) => {
      console.log(oldVal, newVal);
      if (newVal >= 560) {
        // add scrollheader class
        changeHeader.value = true;
      } else {
        changeHeader.value = false;
      }
    });

    return {
      changeHeader,
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
