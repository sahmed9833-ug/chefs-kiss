/** NavLink/NavButton pattern taken from:
https://router.vuejs.org/guide/advanced/extending-router-link.html */
<template>
    <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
        <slot />
    </a>
    <RouterLink v-else :to="to" v-bind="$attrs">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
    to: string
}>()

const isExternalLink = computed(() => {
    return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>
