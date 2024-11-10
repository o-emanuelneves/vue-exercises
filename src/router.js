import { createWebHistory, createRouter } from 'vue-router'

import TriviaQuiz from './components/Quiz/TriviaQuiz.vue'
import GithubUsersSearch from './components/GithubSearch/GithubUsersSearch.vue'

const routes = [
  { path: '/github_search', name: 'github_search', component: GithubUsersSearch },
  { path: '/trivia_quiz',  name: 'trivia_quiz', component: TriviaQuiz },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router