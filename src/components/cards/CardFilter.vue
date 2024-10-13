<script setup lang="ts">
defineOptions({
  name: 'CardFilter',
});

const props = defineProps<{
  title: string;
  src: string;
  // route: string;
}>();
</script>
<template>
  <q-avatar>
    <img :src="props.src" />
    <p>{{ props.title }}</p>
  </q-avatar>
</template>
