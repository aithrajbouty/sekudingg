<template>
  <div class="kelas">
    <Navbar />
    <div class="container">
      <kelas-content />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import KelasContent from '@/components/KelasContent.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Kelas',
  components: {
    Navbar,
    KelasContent,
    Footer

  }
  }
</script>
