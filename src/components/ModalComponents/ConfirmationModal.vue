<template>
    <GenericModal @closeModalClick="handleClick('No')">
        <p class="mb-4">{{ props.confirmationText }}</p>
        <div class="flex flex-row justify-evenly items-center mt-4">
            <PrimaryButtonBordered @click.stop="handleClick('No')">
                No
            </PrimaryButtonBordered>
            <PrimaryButton @click.stop="handleClick('Yes')">
                Yes
            </PrimaryButton>
        </div>
    </GenericModal>
</template>

<script setup lang="ts">

// Local files
import GenericModal from './GenericModal.vue';
import PrimaryButton from './../ButtonComponents/PrimaryButton.vue';
import PrimaryButtonBordered from './../ButtonComponents/PrimaryButtonBordered.vue';

const props = defineProps({
    confirmationText: {
        type: String,
        default: 'Are you sure?'
    }
});

/**
 * Send up to parent when a button is pressed.
 */
const emit = defineEmits<{
    (e: 'confirmationModalClick', yesNoName: string): void
}>();
function handleClick(yesNoName: string): void {
    emit('confirmationModalClick', yesNoName);
}

</script>