<template>
    <TransparentButton 
        :fullWidth="props.fullWidth"
        :disabled="props.disabled"
        :paddingWidth="props.paddingWidth"
        :paddingHeight="props.paddingHeight"
        :marginWidth="props.marginWidth"
        :marginHeight="props.marginHeight"
        :fontBoldType="props.fontBoldType"
        textColor="text-red-600"
        @buttonClick="emit('buttonClick')"
    >
        <slot>Button Text</slot>
    </TransparentButton>
</template>
<script setup lang="ts">

import TransparentButton from './TransparentButton.vue';

const props = defineProps({
    fullWidth: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    paddingWidth: {
        type: String,
        default: 'px-4'
    },
    paddingHeight: {
        type: String,
        default: 'py-2'
    },
    marginWidth: {
        type: String,
        default: ''
    },
    marginHeight: {
        type: String,
        default: ''
    },
    fontBoldType: {
        type: String,
        default: ''
    }
});


const emit = defineEmits<{
    (e: 'buttonClick'): void
}>();

</script>