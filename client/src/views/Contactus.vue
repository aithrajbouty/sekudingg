<template>
  <div class="home">
    <Navbar />
    <navbar-module />
    <div class="container">
      <contactus-content/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import ContactusContent from "@/components/ContactusContent.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    ContactusContent
  }
  }
</script>