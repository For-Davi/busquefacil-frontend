<script setup lang="ts">
import NavbarHome from 'src/components/headers/NavbarHome.vue';
import NavbarFilter from 'src/components/headers/NavbarFilter.vue';
import Banner from 'src/components/content/Banner.vue';

defineOptions({
  name: 'Home',
});
</script>
<template>
  <div class="row items-center justify-evenly">
    <NavbarHome />
    <NavbarFilter />
    <Banner />
  </div>
</template>
