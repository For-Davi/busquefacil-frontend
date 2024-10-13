<script setup lang="ts">
import { reactive } from 'vue';

defineOptions({
  name: 'FiltersRound',
});

const optionsFiltersRounded = reactive([
  {
    title: 'Acessórios',
    src: '/images/categories/acessorios_joias.png',
  },
  {
    title: 'Maternidade',
    src: '/images/categories/maternidade.png',
  },
  {
    title: 'Beleza',
    src: '/images/categories/beleza.png',
  },
  {
    title: 'Decoração',
    src: '/images/categories/casa_decoracao.png',
  },
  {
    title: 'Eletronicos',
    src: '/images/categories/eletronicos.png',
  },
  {
    title: 'Esportivo',
    src: '/images/categories/esportivo.png',
  },
  {
    title: 'Feminino',
    src: '/images/categories/feminino.png',
  },
  {
    title: 'Infantil',
    src: '/images/categories/infantil.png',
  },
  {
    title: 'Lingerie',
    src: '/images/categories/lingerie.png',
  },
  {
    title: 'Masculino',
    src: '/images/categories/masculino.png',
  },
  {
    title: 'Plus Size',
    src: '/images/categories/plus_size.png',
  },
  {
    title: 'Roupa praia',
    src: '/images/categories/praia.png',
  },
  {
    title: 'Roupa praia',
    src: '/images/categories/praia.png',
  },
  {
    title: 'Sapatos e Bolsas',
    src: '/images/categories/sapatos_bolsas.png',
  },
  {
    title: 'Tops',
    src: '/images/categories/tops.png',
  },
]);
</script>
<template>
  <div class="full-width bg-blue-grey-1">Filters</div>
</template>
