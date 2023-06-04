<script lang="ts" setup>
import AuthUI from "../components/UI/AuthUI.vue"
import Envelope from '../assets/icons/Envelope.vue';
import UsersIconVue from '@/assets/icons/UsersIcon.vue';
import Lock from '@/assets/icons/Lock.vue';
import Mark from "@/assets/icons/Mark.vue"
import FormControl from "@/components/UI/FormControl.vue";
import ButtonUI from "@/components/UI/ButtonUI.vue";
</script>
<template>
    <AuthUI>
        <template #main>
            <form class="form">
                <h1>Sign up to Hometify</h1>
                <p>Enter your details to proceed further</p>
                <form-control label="Email" label_name="email">
                    <template #input>
                        <input type="email" name="email" placeholder="Email" />
                    </template>
                    <template #icon>
                        <Envelope />
                    </template>
                </form-control>
                <div class="grid">
                    <form-control label="First name" label_name="first-name">
                        <template #input><input type="text" name="first-name" placeholder="First Name" /></template>
                        <template #icon>
                            <UsersIconVue />
                        </template>
                    </form-control>
                    <form-control label="Last name" label_name="last-name">
                        <template #input>
                            <input type="text" name="last-name" placeholder="Last Name" />
                        </template>
                        <template #icon>
                            <UsersIconVue />
                        </template>
                    </form-control>
                </div>
                <form-control label="Password" label_name="password">
                    <template #input>
                        <input type="password" name="password" placeholder="Password" />
                    </template>

                    <template #icon>
                        <Lock />
                    </template>
                </form-control>
                <form-control label="Confirm Password" label_name="confirm-password">
                    <template #input>
                        <input type="password" name="confirm-password" placeholder="Confirm Password" />
                    </template>
                    <label for="confirm-password">Confirm Password</label>
                    <template #icon><Mark /></template>
                </form-control>
                <div class="check-box">
                    <input type="checkbox" name="agreement" /><label for="agreement">I agree with terms and
                        condition</label>
                </div>
                <ButtonUI value="Continue">

                </ButtonUI>
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

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;
}

.form h1 {
    color: #0f0d2e;
}


.form p {
    font-family: "Inter" !important;
    color: #465969;
    font-size: 0.8rem;
    margin-bottom: 1rem;
}

.check-box {
    text-align: start;
    width: 100%;
    display: flex;
    margin-top: 1rem;
}

.check-box label {
    color: #000000;
    font-family: 'Inter' !important;
}

.check-box input[type='checkbox'] {
    appearance: none;
    border-radius: 50%;
    background-color: rgba(58, 51, 53, 0.04);
    height: 20px;
    width: 20px;
    color: #908E8E;
    margin-right: 0.8rem;
}

.check-box input[type="checkbox"]:checked {
    content: url('../assets/mark.svg');
    background-color: #fff;
    /* background-color: red; */
}

@media screen and (max-width:720px) {
    .form {
        width: 100%;
    }
}
</style>
