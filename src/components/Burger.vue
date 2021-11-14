<template>
  <div class="nav__toggle" @click="openNav">
    <box-icon name="menu-alt-left"></box-icon>
  </div>
</template>

<script>
  import "boxicons";
  export default {
    components: {},
    setup(props, context) {
      const openNav = () => {
        context.emit("showMenu");
      };

      return {
        openNav,
      };
    },
  };
</script>
<style scoped>
  .nav__toggle {
    font-size: 1.3rem;
    cursor: pointer;
  }
</style>
