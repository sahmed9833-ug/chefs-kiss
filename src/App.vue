<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HomeIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'
import NavButton from './components/nav/NavButton.vue'
</script>

<template>
    <header class="flex justify-between px-3 pt-3">
        <img
            alt="logo placeholder"
            class="bg-red-500"
            width="125"
            height="125"
        />

        <nav class="flex gap-2">
            <NavButton to="/" tooltip="Home">
                <HomeIcon />
            </NavButton>

            <NavButton to="/settings" tooltip="Settings">
                <Cog6ToothIcon />
            </NavButton>
        </nav>
    </header>

    <RouterView class="m-auto max-w-[120ch]" />
</template>

<style scoped></style>
