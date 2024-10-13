<script setup lang="ts">
defineOptions({
  name: 'CardFilter',
});

const props = defineProps<{
  title: string;
  src: string;
  fire: boolean;
  // route: string;
}>();
</script>
<template>
  <div class="over column justify-center items-center">
    <q-avatar size="150px" class="bg-grey">
      <img :src="props.src" />
      <q-badge v-show="props.fire" color="red" floating rounded>
        <i class="fa-sharp fa-solid fa-fire-flame-curved"></i>
      </q-badge>
    </q-avatar>
    <p class="text-bold">{{ props.title }}</p>
  </div>
</template>
