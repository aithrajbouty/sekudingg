<template>
  <div class="home">
    <navbar-register />
    <div class="container">
      <signup-content/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarRegister from "@/components/NavbarRegister.vue";
import SignupContent from "@/components/SignupContent.vue";


export default {
  name: 'Home',
  components: {
    NavbarRegister,
    SignupContent
  }
  }
</script>