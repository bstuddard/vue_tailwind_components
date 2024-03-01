<template>
    <div :class="{
            'flex-row': arrowDirection === 'horizontal', 
            'flex-col-reverse': arrowDirection === 'vertical',
            'w-full': props.fullWidth,
            'w-fit': !props.fullWidth,
            'gap-1': arrowDirection === 'horizontal'
        }" class="flex items-center justify-center">
        <ArrowButton v-if="arrowEnabled && arrowDirection === 'horizontal'" arrowType="left" :arrowLabel="'- ' + props.arrowIncrementDecrement" @arrowClick="inputNumber -= props.arrowIncrementDecrement; emit('numberInputUpdate', inputNumber ? inputNumber : 0);"/>
        <ArrowButton v-if="arrowEnabled && arrowDirection === 'vertical'" arrowType="down" @arrowClick="inputNumber -= props.arrowIncrementDecrement; emit('numberInputUpdate', inputNumber ? inputNumber : 0);"/>
        <InputFieldWrapper 
            :footerText="props.footerText" 
            :padding="props.padding" 
            :fieldID="props.fieldID" 
            margin="mb-2"
            :flexGrowActive="props.flexGrowActive" 
            :disabled="props.disabled"
            :textLocation="props.textLocation"
            :fullWidth="props.fullWidth"
        >
                <input
                    :value="inputNumber"
                    @input="handleNumberInputUpdate"
                    @change="handleNumberInputUpdate"
                    type="number"
                    placeholder="0"
                    :id="props.fieldID"
                    :class="{'text-gray-400': props.disabled, 'text-standard-700': !props.disabled}"
                    class="rounded-md bg-standardb p-2 peer w-full text-center peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    :disabled="props.disabled"
                >
        </InputFieldWrapper>
        <ArrowButton v-if="arrowEnabled && arrowDirection === 'horizontal'" arrowType="right" :arrowLabel="'+ ' + props.arrowIncrementDecrement"  @arrowClick="inputNumber += props.arrowIncrementDecrement; emit('numberInputUpdate', inputNumber ? inputNumber : 0);"/>
        <ArrowButton v-if="arrowEnabled && arrowDirection === 'vertical'" arrowType="up" :arrowLabel="'+ ' + props.arrowIncrementDecrement"  @arrowClick="inputNumber += props.arrowIncrementDecrement; emit('numberInputUpdate', inputNumber ? inputNumber : 0);"/>
    </div>
</template>
<script setup lang="ts">
// Library
import { ref } from 'vue';

// Types
import type { Ref } from 'vue';

// Local files
import InputFieldWrapper from './InputFieldWrapper.vue';
import ArrowButton from './../ButtonComponents/ArrowButton.vue'

const inputNumber: Ref<number | null> = ref(null);

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
        default: 'text-center'
    },
    fullWidth: {
        type: Boolean,
        default: true
    },
    arrowEnabled: {
        type: Boolean,
        default: false
    },
    arrowDirection: {
        type: String,
        default: 'horizontal'
    },
    arrowIncrementDecrement: {
        type: Number,
        default: 1
    }
});

const emit = defineEmits<{
    (e: 'numberInputUpdate', inputNumberValue: number): void
}>();

/**
 * Respond to specific key input or change events.
 */
function handleNumberInputUpdate(e: Event): void {
    if (e.target instanceof HTMLInputElement && e.target.value) {
        if (inputNumber.value === null) {
            inputNumber.value = 0;
        }
        inputNumber.value = (e.target.value * 1.0);
    } else {
        inputNumber.value = null;
    }
    emit('numberInputUpdate', inputNumber.value ? inputNumber.value : 0);
}


</script>