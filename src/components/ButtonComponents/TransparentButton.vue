<template>
    <BaseButton 
        :fullWidth="props.fullWidth"
        :disabled="props.disabled"
        :paddingWidth="props.paddingWidth"
        :paddingHeight="props.paddingHeight"
        :marginWidth="props.marginWidth"
        :marginHeight="props.marginHeight"
        :fontBoldType="props.fontBoldType"
        @buttonClick="emit('buttonClick')"
    >
    <div :class="[{
        },
            !props.disabled ? textColor : 'text-gray-500'
        ]">
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
    fontBoldType: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: 'text-standard-700'
    }
});


const emit = defineEmits<{
    (e: 'buttonClick'): void
}>();

</script>