<template>
  <div class="home">
    <Navbar />
    <navbar-module />
    <div class="container">
      <module-content />

    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import NavbarModule from "@/components/NavbarModule.vue";
import ModuleContent from "@/components/ModuleContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    NavbarModule,
    ModuleContent,
    Footer
  }
  }
</script>
