<template>
  <div class="kelasview">
    <NavbarUdahLogin />
    <div class="container">
      <kelas-view-content />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarUdahLogin from "@/components/NavbarUdahLogin.vue";
import KelasViewContent from '@/components/KelasViewContent.vue';

export default {
  name: 'KelasView',
  components: {
    NavbarUdahLogin,
    KelasViewContent

  }
  }
</script>
