<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  setup(props) {
    const str = ref('hello world');

    return {
      str,
    };
  },
};
</script>

<template>
  <div class="bg-[#F7F9FB] overflow-hidden">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
</style>