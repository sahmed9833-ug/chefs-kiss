/** NavLink/NavButton pattern taken from:
https://router.vuejs.org/guide/advanced/extending-router-link.html */
<template>
    <NavLink
        class="button rounded-xl border-2 size-12 border-mantis bg-champagne-pink p-2
            transition-all flex items-center justify-center top-0 left-0 relative
            hover:-top-1 hover:-left-1 active:left-[0.5px] active:shadow-none
            active:top-[0.5px] shadow-mantis hover:shadow-mantis-hover [&>*]:size-6
            [&>*]:text-davys-grey"
        :to="to"
    >
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
<style scoped>
.button .tooltip {
    visibility: hidden;
    position: absolute;
    top: 54px;
    right: 0;

    font-size: 0.8rem;
    color: #474350;
    width: fit-content;
    height: fit-content;
    padding: 0 5px;
    background-color: #f9e6dd;
    border: 2px solid #63c668;
}
.button:hover .tooltip {
    visibility: visible;
}
</style>
