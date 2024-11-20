<script setup>
</script>

<template>
  <div class="header-index">
    <p class="title"> Vue exercises </p>
    <p class="description">The exercises contained in this repository were made with the aim of learning and practicing
      my skills in HTML, CSS and Vue</p>
  </div>
  <div class="cards-index">
    <RouterLink class="card-item"  to="/github_search">
        Github User Search
    </RouterLink>

    <RouterLink class="card-item" to="/trivia_quiz">
        Trivia Quiz
    </RouterLink>
  </div>
</template>

<style scoped>
.header-index {
  padding: 36px;
}

.title {
  font-size: 48px;
}

.description {
  font-size: 24px;
  text-align: center;
}

.cards-index {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
}

.card-item {
  border: 1px solid gray;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: black;
  text-decoration: none;
}

.card-item:hover{
  background-color: rgba(0, 0, 0, 0.3);
}

</style>
