<template>
    <button :class="cssClass" @click="action()">
        <slot />
        <span v-if="tooltip" class="tooltip">
            {{ tooltip }}
        </span>
    </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    type: 'primary' | 'secondary' | 'tertiary'
    tooltip?: string
    action: () => void
}>()

const cssClass = computed(() => {
    return `btn-${props.type}`
})
</script>
