<template>
    <div class="flex-col w-[50ch] mx-auto">
        <label for="search-input" class="text-3xl text-center font-semibold"
            >Search</label
        >

        <div class="flex flex-row gap-2 mt-2">
            <input
                type="search"
                name="search-input"
                v-model="searchTerm"
                class="flex-grow border-2 border-mantis rounded-xl h-12"
            />
            <Transition name="slide">
                <ActionButton
                    v-if="searchTerm"
                    type="secondary"
                    tooltip="Clear"
                    :action="() => (searchTerm = '')"
                >
                    <XMarkIcon />
                </ActionButton>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ActionButton from './common/ActionButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const searchTerm = ref('')
</script>
<style scoped>
input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

.slide-enter-active {
    animation: slide-in 0.5s;
}
/* .slide-leave-active {
    animation: ease-out 0.5s;
} */
@keyframes slide-in {
    0% {
        --tw-translate-x: 0.75rem /* 12px */;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
    }
    20% {
        --tw-translate-x: 0.5rem /* 12px */;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
    }
    100% {
        --tw-translate-x: 0rem /* 12px */;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
    }
}
</style>
