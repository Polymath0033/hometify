<script setup lang="ts">
import AuthUI from "../components/UI/AuthUI.vue"

</script>
<template>
    <AuthUI>
        <template #main>
            <div class="cont">
                <img src="../assets/mail.png" />
                <h1>Almost there</h1>
                <p>Check your email and click on the recovery link
                    in the activation email we sent</p>
                <hr />
                <p>Did you receive any mail</p>
                <router-link to="/log-in">
                    Reset confirmation
                </router-link>
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
    width: 50%;
    margin: 0 auto;
    margin-top: -1rem;
}

.cont h1 {
    color: #0f0d2e;
}

.cont p {
    font-family: 'Inter';
    font-size: 14px;
    text-align: center;
    color: #465969;
}

.cont hr {
    background-color: #465969;
    width: 100%;
}

.cont a {
    all: unset;
    cursor: pointer;
    font-family: "Inter";
    padding: 0.6rem;
    background-color: #F0F5F9;
    border-radius: 10px;
    color: #0f0d2e;
}

@media screen and (max-width:720px) {
    .cont {
        width: 100%;
    }
}
</style>