<template>
    <BaseButton 
        :borderColor="props.disabled ? 'border-gray-500': 'border-standard-500'"
        :fullWidth="props.fullWidth"
        :disabled="props.disabled"
        :paddingWidth="props.paddingWidth"
        :paddingHeight="props.paddingHeight"
        :marginWidth="props.marginWidth"
        :marginHeight="props.marginHeight"
        :roundedType="props.roundedType"
        :fontBoldType="props.fontBoldType"
        @buttonClick="emit('buttonClick')"
    >
        <div :class="{
            'text-standard-700': !props.disabled,
            'text-gray-700': props.disabled
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


const emit = defineEmits<{
    (e: 'buttonClick'): void
}>();

</script>