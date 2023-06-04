<script setup lang="ts">
import AuthUI from '../components/UI/AuthUI.vue'
import Envelope from '@/assets/icons/Envelope.vue';
import ButtonUI from '@/components/UI/ButtonUI.vue';
import FormControl from '@/components/UI/FormControl.vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const clickHandler = () => {
    router.replace({ name: 'Confirm Password', path: '/confirm-password' })
}
</script>
<template>
    <AuthUI>
        <template #main>
            <form class="form">
                <h1>Reset password</h1>
                <p class="header">Enter your verified email address and
                    we will send you a password reset link</p>
                <form-control label="Email" label_name="email">
                    <template #input>
                        <input type="email" name="email" placeholder="Email" />
                    </template>
                    <template #icon>
                        <Envelope />
                    </template>
                </form-control>
                <ButtonUI value="Send Password Recovery Email" @onclick="clickHandler"></ButtonUI>
                <div class="div">
                    <p>Remember password</p>
                    <RouterLink to="/log-in">sign to your account</RouterLink>
                </div>
            </form>

        </template>
    </AuthUI>
</template>
<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    width: 50%;
    margin: 0 auto;
    margin-top: -4rem;
}

.form h1,
.form p {
    text-align: center;
}

.form h1 {
    color: #0f0d2e;
}


.header {
    font-family: "Inter" !important;
    color: #465969;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    width: 70%;
}

.div {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.div p {
    color: #0f0d2e;
}

.div a {
    color: #465969;
}

@media screen and (max-width:720px) {

    .form {
        width: 100%;
    }

    .header {
        width: calc(100% - 2rem);
    }

}
</style>