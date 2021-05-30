<template>
  <div class="aboutus">
      <Navbar />

      <div class="container">
          <CompanyProfile />
  
      </div>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import CompanyProfile from "@/components/CompanyProfile.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Aboutus',
  components: {
    Navbar,
    CompanyProfile,
    Footer
  }
}
</script>

<style>

</style>