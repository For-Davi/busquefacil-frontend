<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'NavbarFilter',
});

const filter = ref<string>('mails');
</script>
<template>
  <nav class="full-width bg-blue-grey-1">
    <q-toolbar class="q-pa-none">
      <q-tabs
        v-model="filter"
        inline-label
        style="width: 99%"
        dense
        indicator-color="grey-5"
      >
        <q-tab name="blusas" label="Blusas" no-caps class="teste" />
        <q-tab name="calças" label="Calças" no-caps />
        <q-tab name="sapatos" label="Sapatos" no-caps />
        <q-tab name="lingeries" label="Lingeries" no-caps />
        <q-tab name="brinquedos" label="Brinquedos" no-caps />
        <q-tab name="acessórios" label="Acessórios" no-caps />
        <q-tab name="automotivo" label="Automotivo" no-caps />
        <q-tab name="bolsas" label="Bolsas" no-caps />
        <q-tab name="casa" label="Casa" no-caps />
        <q-tab name="pet" label="Pet" no-caps />
        <q-tab name="eletrônico" label="Eletrônico" no-caps />
        <q-tab name="promocão" label="Promoção" no-caps />
        <q-tab name="feminino" label="Feminino" no-caps />
        <q-tab name="masculino" label="Masculino" no-caps />
        <q-tab name="infantil" label="Infantil" no-caps />
        <q-tab name="plusSize" label="Plus Size" no-caps />
        <q-tab name="costura" label="Costura" no-caps />
        <q-tab name="escola" label="Escola" no-caps />
        <q-tab name="praia" label="Praia" no-caps />
        <q-tab name="festa" label="Festa" no-caps />
        <q-tab name="limpeza" label="limpeza" no-caps />
        <q-tab name="sexshop" label="Sex Shop" no-caps />
      </q-tabs>
    </q-toolbar>
  </nav>
</template>
