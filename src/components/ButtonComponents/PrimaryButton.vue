<template>
    <BaseButton 
        :backgroundColor="props.disabled ? 'bg-gray-500': 'bg-primary-500'"
        :fullWidth="props.fullWidth"
        :disabled="props.disabled"
        :buttonText="props.buttonText"
        :paddingWidth="props.paddingWidth"
        :paddingHeight="props.paddingHeight"
        :marginWidth="props.marginWidth"
        :marginHeight="props.marginHeight"
        :roundedType="props.roundedType"
        :fontBoldType="props.fontBoldType"
    >
        <div :class="{
            'text-primary-50': !props.disabled,
            'text-gray-50': props.disabled
        }">
            <slot>Button Text</slot>
        </div>
    </BaseButton>
</template>
<script setup lang="ts">

import BaseButton from './BaseButton.vue';

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
    roundedType: {
        type: String,
        default: 'rounded-md'
    },
    fontBoldType: {
        type: String,
        default: ''
    }
});

</script>