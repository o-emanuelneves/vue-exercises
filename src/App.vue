<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import IndexProject from './components/Index/IndexProject.vue';

const route = useRoute();
const isSpecialPage = computed(() => 
  ['github_search', 'trivia_quiz'].includes(route.name) 
);
</script>

<template>
  <div>
    <template v-if="!isSpecialPage">
      <h1>Estou na página index, devo mostrar os cards aqui</h1>
      <IndexProject />
    </template>
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  display: flex;
}
</style>
