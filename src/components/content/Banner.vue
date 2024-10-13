<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'Banner',
});

const slideBanner = ref<number>(1);
</script>
<template>
  <div class="full-width bg-blue-grey-1">
    <q-responsive
      style="width: 100%; height: 300px; max-height: 300px; overflow: hidden"
    >
      <q-carousel
        animated
        v-model="slideBanner"
        arrows
        infinite
        :autoplay="2000"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="q-pa-none"
      >
        <q-carousel-slide :name="1" class="q-pa-none">
          <q-img
            src="/images/banner/banner-1.jpg"
            fit="cover"
            class="img-banner"
          />
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="q-pa-none">
          <q-img
            src="/images/banner/banner-2.jpg"
            fit="cover"
            class="img-banner"
          />
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="q-pa-none">
          <q-img
            src="/images/banner/banner-3.png"
            fit="cover"
            class="img-banner"
          />
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="q-pa-none">
          <q-img
            src="/images/banner/banner-4.png"
            fit="cover"
            class="img-banner"
          />
        </q-carousel-slide>
      </q-carousel>
    </q-responsive>
  </div>
</template>
