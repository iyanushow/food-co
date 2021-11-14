<template>
  <Navigation />
  <Layout>
    <router-view />
  </Layout>
  <!-- <Layout/> -->
</template>
<script>
  import "boxicons/css/boxicons.min.css";
  import Navigation from "@/components/Navigation.vue";

  export default {
    name: "App",
    components: {
      Navigation,
    },
    setup() {},
  };
</script>
<style></style>
