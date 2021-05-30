<template>
  <div class="congrats">
      <Navbar />

      <div class="container">
          <CongratsContent />
  
      </div>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import CongratsContent from "@/components/CongratsContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Congrats',
  components: {
    Navbar,
    CongratsContent,
    Footer
  }
}
</script>

<style>

</style>