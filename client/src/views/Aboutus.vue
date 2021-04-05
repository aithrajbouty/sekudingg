<template>
  <div class="aboutus">
      <Navbar />

      <div class="container">
          <CompanyProfile />
  
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import CompanyProfile from "@/components/CompanyProfile.vue";

export default {
  name: 'Aboutus',
  components: {
    Navbar,
    CompanyProfile
  }
}
</script>

<style>

</style>