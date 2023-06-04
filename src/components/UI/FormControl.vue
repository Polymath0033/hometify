<script setup lang="ts">


defineProps<{ label: string; label_name: string, }>()
</script>
<template>
    <div class="form-control">
        <slot name="input"></slot>
        <!-- <input :type="type" :name="label_name" :placeholder="placeholder" /> -->
        <label :name="label_name">{{ label }}</label>
        <i>
            <slot name="icon"></slot>
        </i>
    </div>
</template>
<style>
.form-control {
    display: grid;
    width: 100%;
    position: relative;
}

.form-control input {
    all: unset;
    color: #465969;
    width: 100%;
    border: 1px solid #465969;
    border-radius: 8px;
    padding: 0.9rem 0.6rem;
    font-family: "Inter" !important;
}

.form-control i {
    position: absolute;
    right: 0;
    bottom: 0.8rem;
}

.form-control label {
    display: none;
    grid-area: 2/1/1/3;
    position: absolute;
    top: 0.4rem;
    left: 0.6rem;
    color: #465969;
    font-family: "Inter" !important;
    font-weight: bold;
}

.form-control input:focus+label {
    display: flex;
    color: #465969;
}

.form-control i * {
    fill: #908E8E;
    color: #908E8E;

}

.form-control input:focus+i* {
    color: #019b64 !important;
    fill: #019b64 !important;
    margin-top: 2rem;
    position: absolute;
    top: 3em;
    z-index: 100000;
}

.form-control input:focus {
    color: #0f0d2e;
    border: 0.125rem solid #019b64;
    padding: 1.6rem 0.6rem 0.5rem 0.6rem !important;
    font-weight: 600;
}
</style>