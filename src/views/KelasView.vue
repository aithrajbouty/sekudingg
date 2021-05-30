<template>
  <div class="kelasview">
    <Navbar />
    <div class="container">
      <kelas-view-content />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import KelasViewContent from '@/components/KelasViewContent.vue';

export default {
  name: 'KelasView',
  components: {
    Navbar,
    KelasViewContent

  }
  }
</script>
