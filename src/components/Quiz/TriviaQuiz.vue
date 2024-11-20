<script setup>
import axios from 'axios';
import { computed, defineProps, ref } from 'vue';
import ScoreBoard from '../Quiz/ScoreBoard.vue';

const question = ref(undefined)
const incorrectAnswers = ref(undefined)
const correctAnswer = ref(undefined)
const chosenAnswer = ref(undefined)
const answerSubmitted = ref(undefined)

const winCount = ref(0);
const totalQuestions = ref(0);

getNewQuestion()

function getNewQuestion() {
  question.value = undefined
  incorrectAnswers.value = undefined
  correctAnswer.value = undefined
  chosenAnswer.value = undefined
  answerSubmitted.value = undefined

  axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy").then((response) => {
    const responseRequest = response.data.results[0];
    question.value = responseRequest.question;
    incorrectAnswers.value = responseRequest.incorrect_answers;
    correctAnswer.value = responseRequest.correct_answer;
  });

  totalQuestions.value++;
}

function submitAnswer() {
  if (!chosenAnswer.value) {
    alert('Pick one of the options');
  }
  else {
    answerSubmitted.value = true
    if(chosenAnswer.value == correctAnswer.value) winCount.value++
  }
}

const answers = computed(() => {
  if (!incorrectAnswers.value || !correctAnswer.value) return [];
  let answersArray = [...incorrectAnswers.value];
  answersArray.splice(Math.round(Math.random() * answersArray.length), 0, correctAnswer.value);
  return answersArray;
});

</script>

<template>
    <ScoreBoard :winCount="winCount" :totalQuestions="totalQuestions" />
  <div v-if="question">
    <h1 v-html="question"></h1>
    <div v-for="answer in answers">
      <div>
        <input type="radio" name="options" :value="answer" :disabled="answerSubmitted" v-model="chosenAnswer">
        <label v-html="answer"></label>
      </div>
    </div>
    <button @click="submitAnswer" v-if="!answerSubmitted">Send</button>

    <div v-if="answerSubmitted" class="result">
      <h4 v-if="chosenAnswer == correctAnswer" v-html="'&#9989; Congratulations, the answer ' +  correctAnswer + ' is correct.'">
      </h4>
      <h4 v-else
      v-html="' &#10060; I\'m sorry, you picked the wrong answer. The correct is ' + correctAnswer"></h4>
    </div> 
    <button class="send" v-if="answerSubmitted" @click="getNewQuestion">
      Next question
    </button>
  </div>
</template>