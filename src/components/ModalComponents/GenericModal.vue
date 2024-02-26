<template>
    <div>
        <div class="fixed top-0 left-0 bottom-0 right-0 z-50 bg-standard-950 bg-opacity-70 flex cursor-default overflow-y-auto" @click.stop="closeModal()">
            <div :class="{
                'min-h-screen': props.minScreenHeight,
                'rounded-lg': !props.minScreenHeight
            }" class="relative bg-standard-200 w-full max-w-lg my-auto mx-auto flex flex-col p-8 cursor-default" @click.stop="">
                <button class="w-6 h-6 absolute top-0 right-0 m-4" type="button" aria-label="close" @click.stop="closeModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>
                <div class="mx-2 my-4">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    minScreenHeight: {
        type: Boolean,
        default: false
    }
});

/**
 * Send up to parent when a button is pressed.
 */
const emit = defineEmits<{
    (e: 'closeModalClick'): void
}>();
function closeModal(): void {
    emit('closeModalClick');
}

</script>