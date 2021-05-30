<template>
  <div class="login">
      <navbar-register />
      <LoginContent />
  </div>
</template>

<script>
import NavbarRegister from "@/components/NavbarRegister.vue";
import LoginContent from "@/components/LoginContent.vue";

export default {
    name: 'login',
    components: {
    NavbarRegister,
    LoginContent
}
}
</script>

<style>

</style>