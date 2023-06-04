<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import ArrowLeft from '@/assets/icons/ArrowLeft.vue';
const route = useRoute();
const router = useRouter()
const back_btn = () => {
    router.go(-1)
}
const changeRoute = () => {

    if (route.path === '/log-in') {
        router.push({ name: "Signup", path: '/sign-up' })
    } else {
        router.push({ name: "Login", path: "/log-in" })
    }
}

</script>
<template>
    <div class="container">
        <header>
            <router-link to="/">
                <img src="../../assets/logo.png" />
            </router-link>
            <div class="auth">
                <button role="link" v-on:click="back_btn">
                    <ArrowLeft color_="#908E8E" />
                    Back
                </button>
                <button role="link" v-on:click="changeRoute()">{{
                    route.path === "/log-in" ? "Signup" :
                    "Login"
                }}</button>
            </div>
        </header>
        <slot name="main"></slot>
    </div>
</template>
<style scoped>
.container {
    padding: 1rem 5rem;
    background-color: #fff;
    background-image: url('../../assets/flower.png');
    background-position: right bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: fixed;
    height: 100%;
    width: 100%;
}

header {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 10000000;
}

.auth {
    display: flex;
    gap: 1rem;

}

.auth button {
    all: unset;
    background-color: rgba(58, 51, 53, 0.04);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: #908E8E;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

@media screen and (max-width:520px) {
    .container {
        padding: 1rem 2rem;
    }

    .auth button {
        padding: 0.2rem 0.6rem;
    }
}
</style>