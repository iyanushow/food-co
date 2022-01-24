<template>
  <li class="change-theme theme-button" @click="changeTheme">
    <box-icon name="moon" v-if="!theme"></box-icon>
    <box-icon name="sun" v-else></box-icon>
  </li>
</template>

<script>
import 'boxicons';
import { ref } from '@vue/reactivity';
import { provide } from 'vue';

export default {
  setup() {
    const theme = ref(false);

    const changeTheme = () => (theme.value = !theme.value);
    console.log(theme);
    provide('themeValue', theme);

    return {
      theme,
      changeTheme,
    };
  },
};
</script>

<style scoped>
.change-theme {
  position: absolute;
  right: 1rem;
  top: 1.8rem;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
}
</style>
