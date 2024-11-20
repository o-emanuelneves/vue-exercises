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
