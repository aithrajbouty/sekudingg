<template>
  <div class="kelasviewlock">
    <Navbar />
    <div class="container">
      <kelas-view-lock-content />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import KelasViewLockContent from "@/components/KelasViewLockContent.vue";

export default {
  name: 'KelasViewLock',
  components: {
    Navbar,
    KelasViewLockContent

  }
  }
</script>

    KelasViewLockContent