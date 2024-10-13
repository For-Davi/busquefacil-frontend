<script setup lang="ts">
import { reactive } from 'vue';
import CardFilter from '../cards/CardFilter.vue';
import { CardFilterRounded } from 'src/ts/interfaces/data/Card';

defineOptions({
  name: 'FiltersRound',
});

const optionsFiltersRounded = reactive<Array<CardFilterRounded>>([
  {
    title: 'Acessórios',
    src: '/images/categories/acessorios_joias.png',
    fire: false,
  },
  {
    title: 'Lingerie',
    src: '/images/categories/lingerie.png',
    fire: true,
  },
  {
    title: 'Maternidade',
    src: '/images/categories/bebe_maternidade.png',
    fire: false,
  },
  {
    title: 'Feminino',
    src: '/images/categories/feminino.png',
    fire: true,
  },
  {
    title: 'Beleza',
    src: '/images/categories/beleza.png',
    fire: false,
  },
  {
    title: 'Decoração',
    src: '/images/categories/casa_decoracao.png',
    fire: true,
  },
  {
    title: 'Eletronicos',
    src: '/images/categories/eletronicos.png',
    fire: false,
  },
  {
    title: 'Esportivo',
    src: '/images/categories/esportivo.png',
    fire: false,
  },

  {
    title: 'Infantil',
    src: '/images/categories/infantil.png',
    fire: true,
  },

  {
    title: 'Masculino',
    src: '/images/categories/masculino.png',
    fire: true,
  },
  {
    title: 'Plus Size',
    src: '/images/categories/plus_size.png',
    fire: true,
  },
  {
    title: 'Roupa praia',
    src: '/images/categories/roupa_praia.png',
    fire: false,
  },
]);
</script>
<template>
  <section class="full-width row">
    <div
      class="col-2 q-my-sm"
      v-for="(card, index) in optionsFiltersRounded"
      :key="index"
    >
      <CardFilter :title="card.title" :src="card.src" :fire="card.fire" />
    </div>
  </section>
</template>
