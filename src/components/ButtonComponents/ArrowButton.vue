<template>
    <div class="flex">
    
        <!--Left arrow-->
        <button v-if="props.arrowType === 'left'" class="mr-4 h-6 w-6 flex-shrink sm:hover:scale-105"  type="button" @click="handleArrowClick">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <span class="text-xs font-light flex-row items-center justify-between flex">
                <p class="m-1 whitespace-nowrap">{{ arrowLabel }}</p>
            </span>
        </button>

        <!--Down Arrow-->
        <button v-if="props.arrowType === 'down'" class="my-0.5 h-6 w-6 flex-shrink sm:hover:scale-105"  type="button" @click="handleArrowClick">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </button>
    
        <!--Right arrow-->
        <button v-if="props.arrowType === 'right'" class="ml-4 h-6 w-6 flex-shrink sm:hover:scale-105"  type="button" @click="handleArrowClick">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            <span class="text-xs font-light flex-row items-center justify-between flex">
                <p class="m-1 whitespace-nowrap">{{ arrowLabel }}</p>
            </span>
        </button>

        <!--Up Arrow-->
        <button v-if="props.arrowType === 'up'" class="my-0.5 h-6 w-6 flex-shrink sm:hover:scale-105"  type="button" @click="handleArrowClick">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
        </button>
    
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    arrowType: {
        type: String,
        default: ''
    },
    arrowLabel: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
});


/**
 * Send up to parent when a button is pressed.
 */
const emit = defineEmits<{
    (e: 'arrowClick'): void
}>();
function handleArrowClick(): void {
    emit('arrowClick'); 
}
</script>