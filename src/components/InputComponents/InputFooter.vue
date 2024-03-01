<template>
    <div v-if="!disabled" :class="[props.padding]" class="border-b border-standardd sm:peer-active:border-standard-400 sm:peer-focus:border-standard-400 sm:peer-hover:border-standard-400 sm:group-active:border-standard-400 sm:group-focus:border-standard-400 sm:group-hover:border-standard-400"></div>
    <div v-else :class="[props.padding]" class="border-b border-standardd text-gray-500"></div>
    <p v-if="!disabled" :class="[props.margin, props.textLocation]" class="font-light text-xs sm:peer-active:font-medium sm:peer-focus:font-medium sm:peer-hover:font-medium sm:group-active:font-medium sm:group-focus:font-medium sm:group-hover:font-medium">{{ footerText }}</p>
    <p v-else :class="[props.margin, props.textLocation]" class="font-light text-xs text-gray-500">{{ footerText }}</p>
</template>
<script setup lang="ts">

const props = defineProps({
    footerText: {
        type: String
    },
    padding: {
        type: String,
        default: 'py-0.5'
    },
    margin: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    textLocation: {
        type: String,
        default: 'text-left'
    }
});

</script>