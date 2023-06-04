<script setup lang="ts">
import AuthUI from '@/components/UI/AuthUI.vue';
</script>
<template>
    <AuthUI>
        <template #main>
            <div class="cont">
                <img src="../assets/Success.png" />
                <h1>Congratulations!</h1>
                <p>You have successfully created an account with us.
                    You can explore all the awesome investment packages we offer.
                    Sign in to your account to get started</p>
                <router-link to="/log-in">Login to your account</router-link>
            </div>
        </template>
    </AuthUI>
</template>
<style scoped>
.cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    width: 6s0%;
    margin: 0 auto;
    margin-top: -4rem;
}

.cont h1 {
    color: #019b64;
}

.cont p {
    color: #465969;
    font-family: 'Inter';
    text-align: center;
    font-size: 14px;
}

.cont a {
    all: unset;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background-color: #019b64;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
    font-family: 'Inter';
    margin-top: 2rem;
    padding: 1rem 1rem;
}

@media screen and (max-width:520px) {
    .cont {
        width: 100%;
    }
}
</style>