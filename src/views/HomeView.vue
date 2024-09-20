<script setup lang="ts">
import RecipeCard from '@/components/recipe/RecipeCard.vue'
import SearchBox from '@/components/SearchBox.vue'
import { useRecipesStore } from '@/stores/recipes'
import { onMounted } from 'vue'

const store = useRecipesStore()

onMounted(() => {
    store.fetchRecipes()
})
</script>

<template>
    <main>
        <SearchBox />
        <section class="grid grid-flow-col gap-4 px-4 pt-4">
            <RecipeCard
                v-for="recipe of store.recipes"
                :key="recipe.uuid"
                :recipe="recipe"
            />
        </section>
    </main>
</template>
