<template>
  <div class="home">
    <Navbar />
    <navbar-module />
    <div class="container">
      <modul-saya-content/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import NavbarModule from "@/components/NavbarModule.vue";
import ModulSayaContent from "@/components/ModulSayaContent.vue";


export default {
  name: 'Home',
  components: {
    Navbar,
    NavbarModule,
    ModulSayaContent
  }
  }
</script>