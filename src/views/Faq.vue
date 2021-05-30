<template>
  <div class="home">
    <Navbar />
    <navbar-module />
          <img src="../assets/images/flowerkiri.svg" width="40%"/>
    <div class="container">
      <faq-content/>

    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FaqContent from "@/components/FaqContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    FaqContent,
    Footer
  }
  }
</script>
