<template>
    <TransparentButton 
        :fullWidth="props.fullWidth"
        :disabled="props.disabled"
        :buttonText="props.buttonText"
        :paddingWidth="props.paddingWidth"
        :paddingHeight="props.paddingHeight"
        :marginWidth="props.marginWidth"
        :marginHeight="props.marginHeight"
        :fontBoldType="props.fontBoldType"
        textColor="text-primary-700"
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
    buttonText: {
        type: String,
        default: 'Button Text'
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

</script>