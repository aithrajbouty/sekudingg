<template>
  <div class="home">
    <Navbar />
    <navbar-module />
    <div class="container">
      <faq-content/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import FaqContent from "@/components/FaqContent.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    FaqContent
  }
  }
</script>
