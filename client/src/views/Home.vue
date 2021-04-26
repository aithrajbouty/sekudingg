<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
    
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Footer
  }
  }
</script>
