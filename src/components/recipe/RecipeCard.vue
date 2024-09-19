<template>
    <article class="bg-champagne-pink border-2 border-mantis rounded-xl p-5">
        <h2 class="text-davys-grey font-bold text-xl">{{ recipe.name }}</h2>
        <p v-if="recipe.description">{{ recipe.description }}</p>
    </article>
</template>

<script setup lang="ts">
import type { Recipe } from '@/interfaces'

defineProps<{
    recipe: Recipe
}>()
</script>
