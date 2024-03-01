<template>
    <div :class="{
            'w-full': props.fullWidth,
            'w-fit': !props.fullWidth
        }" class="flex items-center justify-center group">
        <div :class="{'flex-grow': props.flexGrowActive}">
            <label :for="props.fieldID" class="sr-only">
                {{ props.footerText }}
            </label>
            <slot></slot>
            <InputFooter :footerText="props.footerText" :textLocation="props.textLocation" :padding="props.padding" :mrAll="props.margin" :disabled="props.disabled"/>
        </div>
    </div>
</template>
<script setup lang="ts">

// Local files
import InputFooter from './InputFooter.vue';

const props = defineProps({
    footerText: {
        type: String,
        default: ''
    },
    padding: {
        type: String,
        default: 'py-0.5'
    },
    fieldID: {
        type: String
    },
    margin: {
        type: String,
        default: ''
    },
    flexGrowActive: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    textLocation: {
        type: String,
        default: 'text-left'
    },
    fullWidth: {
        type: Boolean,
        default: true
    }
});

</script>