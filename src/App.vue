<template>
  <Navigation />
  <Layout>
    <!-- <router-view /> -->

    <HeroSection />
    <About />
  </Layout>
</template>
<script>
import 'boxicons/css/boxicons.min.css';
import Layout from '@/components/Layout.vue';
import About from '@/components/sections/About.vue';
import Navigation from '@/components/Navigation.vue';
import HeroSection from '@/components/sections/HeroSection.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Layout,
    HeroSection,
    About,
  },
  setup() {},
};
</script>
<style></style>
