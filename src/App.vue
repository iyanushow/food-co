<template>
  <section id="main-app" :class="{ dark: theme }">
    <Navigation />
    <Layout>
      <HeroSection />
      <About />
      <Services />
      <Menu />
      <FindApp />
      <Contact />
    </Layout>
    <Footer />
  </section>
</template>
<script>
import 'boxicons/css/boxicons.min.css';
import Layout from '@/components/Layout.vue';
import About from '@/components/sections/About.vue';
import Navigation from '@/components/Navigation.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import Services from '@/components/sections/Services.vue';
import Menu from '@/components/sections/Menu.vue';
import FindApp from '@/components/sections/FindApp.vue';
import Contact from '@/components/sections/Contact.vue';
import Footer from '@/components/sections/Footer.vue';
import { inject } from '@vue/runtime-core';

export default {
  name: 'App',
  components: {
    Navigation,
    Layout,
    HeroSection,
    About,
    Services,
    Menu,
    FindApp,
    Contact,
    Footer,
  },
  setup() {
    const theme = inject('themeValue', null);
    console.log(theme);
    return {
      theme,
    };
  },
};
</script>
<style></style>
