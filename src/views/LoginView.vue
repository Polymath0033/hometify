<script lang="ts" setup>
import AuthUI from '@/components/UI/AuthUI.vue';
import Envelope from '@/assets/icons/Envelope.vue';
import Lock from '@/assets/icons/Lock.vue';
import { RouterLink } from 'vue-router';
import FormControl from '@/components/UI/FormControl.vue';
import ButtonUI from '@/components/UI/ButtonUI.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const clickHandler = () => {
    router.replace('/')
}
</script>
<template>
    <AuthUI>
        <template #main>
            <form class="form">
                <h1>Welcome Back</h1>
                <p>Sign in to to your account</p>
                <FormControl label="Email" label_name="Email">
                    <template #input>
                        <input type="email" name="email" placeholder="email" />
                    </template>
                    <template #icon>
                        <Envelope />
                    </template>
                </FormControl>
                <FormControl label="Password" label_name="password" class="form-control">
                    <template #input>
                        <input type="password" name="password" placeholder="Password" />
                    </template>
                    <template #icon>
                        <Lock />
                    </template>
                </FormControl>
                <RouterLink to="/reset-password-email">Forget password?</RouterLink>
                <ButtonUI value="continue" @onclick="clickHandler" type="submit" />
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
    margin-top: -1rem;
}

.form h1,
.form p {
    text-align: center;
}

.form h1 {
    color: #0f0d2e;
}

.form a {
    color: #908E8E;
    width: 100%;
    text-align: end;
    text-decoration: none;
    font-family: 'Inter';
}


.form p {
    font-family: "Inter" !important;
    color: #465969;
    font-size: 0.8rem;
    margin-bottom: 1rem;
}

@media screen and (max-width:720px) {
    .form {
        width: 100%;
    }
}
</style>
