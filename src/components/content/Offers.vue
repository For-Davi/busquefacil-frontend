<script setup lang="ts">
defineOptions({
  name: 'Offers',
});
</script>
<template>
  <div style="width: 98%">
    <q-card class="bg-grey-2 q-my-md no-box-shadow" style="height: 500px">
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title class="row q-gutter-x-sm">
            <span class="text-orange text-h4">Lista</span>
            <span class="text-black text-h4">Ofertas</span>
            <q-img src="public/icons/discount.png" width="40px" />
          </q-toolbar-title>
          <q-btn color="orange" class="row justify-between" flat>
            <span class="q-mr-sm text-bold">Ver mais</span>
            <i class="fa-solid fa-angle-right"></i>
          </q-btn>
        </q-toolbar>
      </q-card-section>
    </q-card>
  </div>
</template>
