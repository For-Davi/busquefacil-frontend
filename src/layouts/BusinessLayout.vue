<script setup lang="ts">
defineOptions({
  name: 'BusinessLayout',
});
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header> NAVBAR BUSINESS </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
