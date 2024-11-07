<script setup>
import { ref } from 'vue';

const username = ref('')
const userProfile = ref(null);
// const userProfile = {
//     "login": "o-emanuelneves",
//     "id": 103153962,
//     "node_id": "U_kgDOBiYBKg",
//     "avatar_url": "https://avatars.githubusercontent.com/u/103153962?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/o-emanuelneves",
//     "html_url": "https://github.com/o-emanuelneves",
//     "followers_url": "https://api.github.com/users/o-emanuelneves/followers",
//     "following_url": "https://api.github.com/users/o-emanuelneves/following{/other_user}",
//     "gists_url": "https://api.github.com/users/o-emanuelneves/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/o-emanuelneves/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/o-emanuelneves/subscriptions",
//     "organizations_url": "https://api.github.com/users/o-emanuelneves/orgs",
//     "repos_url": "https://api.github.com/users/o-emanuelneves/repos",
//     "events_url": "https://api.github.com/users/o-emanuelneves/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/o-emanuelneves/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": "Emanuel Neves",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 2,
//     "public_gists": 0,
//     "followers": 24,
//     "following": 23,
//     "created_at": "2022-04-06T23:40:36Z",
//     "updated_at": "2024-10-28T17:18:20Z"
// }
const error = ref(null)

const getUserProfile = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${username.value}`)
        const data = await response.json()
        if (response.ok) {
            userProfile.value = data
            error.value = null
        }
        else {
            userProfile.value = null
            error.value = `Error: ${data.message}`
        }
    }
    catch (err) {
        console.log('Erro ao buscar dados', err);
        error.value = 'Ocorreu um erro ao buscar os dados.'
    }
}
</script>

<template>
    <main>
    <div class="github-profile-viewer">
        <h1 class="title">Visualizar perfil de usuários github</h1>

        <div class="search-container">
            <input class="input-username" v-model="username" 
            placeholder="Nome do usuário" type="text" @keyup.enter="getUserProfile">
            <button class="btn-search" @click="getUserProfile">Pesquisar</button>
        </div>

        <div v-if="userProfile" class="user-profile">
            <div class="general-info">
                <a class="a-img-user" :href="userProfile.html_url" target="_blank">
                    <img class="img-user" :src="userProfile.avatar_url" :alt="userProfile.login">
                </a>

                <div class="title-name"> {{ userProfile.name }} </div>
                <div> {{ userProfile.bio }} </div>
            </div>
        </div>
    </div>
</main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    padding: 0;
    margin: 0px;
    font-family: "Roboto", serif;
    box-sizing: border-box;
}

main{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(209, 206, 206);
}

.title {
    text-align: center;
}

.github-profile-viewer {
    background-color: white;
    display: flex;
    border: 1px solid gray;
    flex-direction: column;
    border-radius: 20px;
    height: 60vh;
    width: 80vh;
}

.search-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    height: 32px;
    margin: 16px;
}

.user-profile {
    display: flex;
    flex-direction: column;
}

.general-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
}


.a-img-user {
    display: flex;
    justify-content: center;
    margin: 16px;
}

.img-user {
    max-width: 60%;
    border-radius: 50%;
}

.title-name {
    font-size: 2vw;
}

.input-username {
    width: 360px;
}

.input-username:focus {
    border: 1px solid blue;

}
</style>