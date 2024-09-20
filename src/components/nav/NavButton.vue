/** NavLink/NavButton pattern taken from:
https://router.vuejs.org/guide/advanced/extending-router-link.html */
<template>
    <NavLink class="btn-secondary" :to="to">
        <slot />
        <span v-if="tooltip" class="tooltip">
            {{ tooltip }}
        </span>
    </NavLink>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'

defineProps<{
    to: string
    tooltip?: string
}>()
</script>
