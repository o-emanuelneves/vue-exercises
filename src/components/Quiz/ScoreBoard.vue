<script setup>
const props = defineProps({
  winCount: Number,
  totalQuestions: Number
});
</script>

<template>
    <div class="score">
        <span>Total questions:  {{ props.totalQuestions }}</span>
        <span>Wins: {{ props.winCount }}</span>

    </div>
</template>

<style scoped>

.score {
    display: flex;
    flex-direction: column;
}
</style>