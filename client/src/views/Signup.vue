<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <signup-content/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import SignupContent from "@/components/SignupContent.vue";


export default {
  name: 'Home',
  components: {
    Navbar,
    SignupContent
  }
  }
</script>