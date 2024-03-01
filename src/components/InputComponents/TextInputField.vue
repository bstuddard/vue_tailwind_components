<template>
    <InputFieldWrapper 
        :footerText="props.footerText" 
        :padding="props.padding" 
        :fieldID="props.fieldID" 
        :margin="props.margin" 
        :flexGrowActive="props.flexGrowActive" 
        :disabled="props.disabled"
        :textLocation="props.textLocation"
        :fullWidth="props.fullWidth"
    >
        <input
            :value="inputTerm"
            @input="handleTextInputUpdate"
            @change="handleTextInputUpdate"
            :id="props.fieldID"
            :class="{'text-gray-400': props.disabled, 'text-standard-700': !props.disabled}"
            class="rounded-md bg-standardb p-2 peer w-full"
            :placeholder="props.helpText"
            :disabled="props.disabled"
        >
    </InputFieldWrapper>
</template>
<script setup lang="ts">
// Library
import { ref } from 'vue';

// Types
import type { Ref } from 'vue';

// Local files
import InputFieldWrapper from './InputFieldWrapper.vue';

const inputTerm: Ref<string> = ref('');

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
    },
    helpText: {
        type: String,
        default: 'Help Text'
    }
});

const emit = defineEmits<{
    (e: 'textInputUpdate', inputTermValue: string): void
}>();

/**
 * Respond to specific key input or change events.
 */
function handleTextInputUpdate(e: Event): void {
    if (e.target instanceof HTMLInputElement && e.target.value) {
        inputTerm.value = e.target.value;
    } else {
        inputTerm.value = '';
    }
    emit('textInputUpdate', inputTerm.value);
}


</script>