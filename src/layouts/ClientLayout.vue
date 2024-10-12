<script setup lang="ts">
defineOptions({
  name: 'ClientLayout',
});
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header> NAVBAR CLIENT </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
