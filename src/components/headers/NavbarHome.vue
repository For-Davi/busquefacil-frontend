<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'NavbarHome',
});

const searchProduct = ref<string>('');
</script>
<template>
  <nav class="full-width bg-blue-grey-1">
    <q-toolbar class="row justify-between">
      <div class="col">
        <q-img src="/images/logo.png" width="120px" />
      </div>
      <div class="col">
        <q-input
          outlined
          v-model="searchProduct"
          :dense="true"
          label="Pesquisar produto"
          class="col"
        >
          <template v-slot:append>
            <q-btn color="grey-10 " round flat size="md">
              <q-icon name="search" />
            </q-btn>
          </template>
        </q-input>
      </div>
      <div class="col">
        <q-btn
          class="float-right"
          color="grey-10 q-mr-md"
          flat
          round
          icon="person"
          size="md"
        >
          <q-menu style="min-width: 200px" class="q-mr-md">
            <q-list dense>
              <q-item class="row items-center" clickable>
                <span class="text-caption">Fazer autenticação</span>
              </q-item>
              <q-item class="row items-center" clickable>
                <span class="text-caption">Vincular como empresa</span>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </nav>
</template>
