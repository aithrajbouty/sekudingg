<template>
  <div class="profile">
    <Navbar />
    <ProfileContent />  
    <Footer />          
  </div>
  
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import ProfileContent from '@/components/ProfileContent.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'Profile',
  components: {
    Navbar,
    ProfileContent,
    Footer
  }
}
</script>

<style>

</style>