<template>
  <div class="profile">
    <NavbarUdahLogin />
    <ProfileContent />  
    <Footer />          
  </div>
  
</template>

<script>
// @ is an alias to /src
import NavbarUdahLogin from '@/components/NavbarUdahLogin.vue'
import ProfileContent from '@/components/ProfileContent.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'Profile',
  components: {
    NavbarUdahLogin,
    ProfileContent,
    Footer
  }
}
</script>

<style>

</style>