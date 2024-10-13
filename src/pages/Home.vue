<script setup lang="ts">
import NavbarHome from 'src/components/headers/NavbarHome.vue';
import NavbarFilter from 'src/components/headers/NavbarFilter.vue';
import Banner from 'src/components/content/Banner.vue';
import FiltersRound from 'src/components/content/FiltersRound.vue';
import Offers from 'src/components/content/Offers.vue';

defineOptions({
  name: 'Home',
});
</script>
<template>
  <div class="column items-center justify-center">
    <NavbarHome />
    <NavbarFilter />
    <Banner />
    <FiltersRound />
    <Offers />
  </div>
</template>
