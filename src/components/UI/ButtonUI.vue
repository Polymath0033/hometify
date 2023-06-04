<script setup lang="ts">
withDefaults(defineProps<{ value: string; type: "button" | "reset" | "submit" }>(), { value: '', type: 'button' })
defineEmits(['onclick'])
</script>
<template>
    <button v-on:click="$emit('onclick')" :type="type">
        {{ value }}
    </button>
</template>
<style scoped>
button {
    all: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: #fff;
    background-color: #019b64;
    width: 100%;
    border-radius: 10px;
    padding: 0.6rem 0.8rem;
    margin: 0 auto;
    font-family: 'Inter';
    text-transform: capitalize;
    margin-top: 2rem;
}
</style>