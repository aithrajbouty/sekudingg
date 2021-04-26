<template>
  <div class="home">
    <Navbar />
    <navbar-module />
    <div class="container">
      <contactus-content/>

    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import ContactusContent from "@/components/ContactusContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    ContactusContent,
    Footer
  }
  }
</script>