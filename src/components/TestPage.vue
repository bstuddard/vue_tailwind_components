<template>
    

    <!--Main Content Body-->
    <div class="flex-grow">
        <div class="mx-auto min-w-full sm:min-w-min text-standard-700 bg-standardb min-h-svh">
            
            <div class="text-lg mx-auto py-4 w-full text-center text-standard-500">
                Examples of various vue/tailwind components
            </div>

            <div class="text-md mx-auto italic font-light py-4 w-full text-center text-standard-600">
                Primary Buttons
            </div>

            <PrimaryButton @buttonClick="console.log('Primary Button Clicked')">
                Primary Button
            </PrimaryButton>
            <PrimaryButton @buttonClick="console.log('Primary Button Disabled Clicked')" :disabled="true">
                Primary Button Disabled
            </PrimaryButton>

            <PrimaryButtonBordered @buttonClick="console.log('Primary Button Bordered Clicked')">
                Primary Button Bordered
            </PrimaryButtonBordered>
            <PrimaryButtonBordered @buttonClick="console.log('Primary Button Bordered Disabled Clicked')" :disabled="true">
                Primary Button Bordered Disabled
            </PrimaryButtonBordered>

            <PrimaryButtonDropdown 
                @buttonClick="console.log('Primary Button Dropdown Clicked')" 
                :menuItemList="['a', 'b']"
                @handleMenuClick="(menuItemName: string) => console.log(menuItemName)"
            >
                Primary Button Dropdown
            </PrimaryButtonDropdown>

            <div class="text-md mx-auto italic font-light py-4 w-full text-center text-standard-600">
                Secondary Buttons
            </div>

            <SecondaryButton @buttonClick="console.log('Secondary Button Clicked')">
                Secondary Button
            </SecondaryButton>
            <SecondaryButton @buttonClick="console.log('Secondary Button Disabled Clicked')" :disabled="true">
                Secondary Button Disabled
            </SecondaryButton>

            <SecondaryButtonBordered @buttonClick="console.log('Secondary Button Bordered Clicked')">
                Secondary Button Bordered
            </SecondaryButtonBordered>
            <SecondaryButtonBordered @buttonClick="console.log('Secondary Button Bordered Disabled Clicked')" :disabled="true">
                Secondary Button Bordered Disabled
            </SecondaryButtonBordered>

            <SecondaryButtonDropdown 
                @buttonClick="console.log('Secondary Button Dropdown Clicked')" 
                :menuItemList="['c', 'd']"
                @handleMenuClick="(menuItemName: string) => console.log(menuItemName)"
            >
                Secondary Button Dropdown
            </SecondaryButtonDropdown>
            
            <div class="text-md mx-auto italic font-light py-4 w-full text-center text-standard-600">
                Transparent Buttons
            </div>

            <TransparentButton @buttonClick="console.log('Transparent Button Clicked')">
                Transparent Button
            </TransparentButton>
            <TransparentButton @buttonClick="console.log('Transparent Button Disabled Clicked')" :disabled="true">
                Transparent Button Disabled
            </TransparentButton>

            <TransparentWarnButton @buttonClick="console.log('Transparent Warn Button Clicked')">
                Transparent Warn Button
            </TransparentWarnButton>
            <TransparentWarnButton @buttonClick="console.log('Transparent Warn Button Disabled Clicked')" :disabled="true">
                Transparent Warn Button Disabled
            </TransparentWarnButton>

            <TransparentPrimaryButton @buttonClick="console.log('Transparent Primary Button Clicked')">
                Transparent Primary Button
            </TransparentPrimaryButton>
            <TransparentPrimaryButton @buttonClick="console.log('Transparent Primary Button Disabled Clicked')" :disabled="true">
                Transparent Primary Button Disabled
            </TransparentPrimaryButton>

            <div class="text-md mx-auto italic font-light py-4 w-full text-center text-standard-600">
                Modals
            </div>

            <PrimaryButton @buttonClick="console.log('Primary Generic Modal Launch Button Clicked'); showGenericModal=true">
                Launch Generic Modal
            </PrimaryButton>
            <GenericModal v-if="showGenericModal" @closeModalClick="showGenericModal=false">
                Generic Modal Example
            </GenericModal>

            <PrimaryButton @buttonClick="console.log('Primary Confirmation Modal Launch Button Clicked'); showConfirmationModal=true">
                Launch Confirmation Modal
            </PrimaryButton>
            <ConfirmationModal v-if="showConfirmationModal" @confirmationModalClick="(confirmationModalClickResult) => {console.log(confirmationModalClickResult); showConfirmationModal=false;}">
                Confirmation Modal Example
            </ConfirmationModal>

        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'

import PrimaryButton from '@/components/ButtonComponents/PrimaryButton.vue';
import PrimaryButtonBordered from '@/components/ButtonComponents/PrimaryButtonBordered.vue';
import SecondaryButton from '@/components/ButtonComponents/SecondaryButton.vue';
import SecondaryButtonBordered from '@/components/ButtonComponents/SecondaryButtonBordered.vue';
import TransparentButton from '@/components/ButtonComponents/TransparentButton.vue';
import TransparentWarnButton from '@/components/ButtonComponents/TransparentWarnButton.vue';
import TransparentPrimaryButton from '@/components/ButtonComponents/TransparentPrimaryButton.vue';
import PrimaryButtonDropdown from '@/components/ButtonComponents/PrimaryButtonDropdown.vue';
import SecondaryButtonDropdown from '@/components/ButtonComponents/SecondaryButtonDropdown.vue';
import GenericModal from '@/components/ModalComponents/GenericModal.vue';
import ConfirmationModal from '@/components/ModalComponents/ConfirmationModal.vue';

const showGenericModal: Ref<boolean> = ref(false);
const showConfirmationModal: Ref<boolean> = ref(false);

</script>