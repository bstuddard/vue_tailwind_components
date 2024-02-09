<template>
    

    <!--Main Content Body-->
    <div class="flex-grow">
        <div class="mx-auto min-w-full sm:min-w-min text-standard-700 bg-standardb min-h-svh">
            
            <div class="text-lg mx-auto py-4 w-full text-center text-standard-500">
                Examples of various vue/tailwind components
            </div>

            <div class="text-md mx-auto font-semibold py-4 w-full text-center text-standard-600">
                Buttons
            </div>

            <div class="m-4"></div>

            <BaseButton @handleClick="console.log('Base Button Clicked')">
                Base Button
            </BaseButton>
            <BaseButton @handleClick="console.log('Bold Base Button Clicked')" fontBoldType="font-semibold">
                Bold Base Button
            </BaseButton>

            <div class="m-4"></div>

            <PrimaryButton @handleClick="console.log('Primary Button Clicked')">
                Primary Button
            </PrimaryButton>
            <PrimaryButton @handleClick="console.log('Primary Button Disabled Clicked')" :disabled="true">
                Primary Button Disabled
            </PrimaryButton>

            <div class="m-4"></div>

            <PrimaryButtonBordered @handleClick="console.log('Primary Button Bordered Clicked')">
                Primary Button Bordered
            </PrimaryButtonBordered>
            <PrimaryButtonBordered @handleClick="console.log('Primary Button Bordered Disabled Clicked')" :disabled="true">
                Primary Button Bordered Disabled
            </PrimaryButtonBordered>

            <div class="m-4"></div>

            <TransparentButton @handleClick="console.log('Transparent Button Clicked')">
                Transparent Button
            </TransparentButton>
            <TransparentButton @handleClick="console.log('Transparent Button Disabled Clicked')" :disabled="true">
                Transparent Button Disabled
            </TransparentButton>

            <div class="m-4"></div>

            <TransparentWarnButton @handleClick="console.log('Transparent Warn Button Clicked')">
                Transparent Warn Button
            </TransparentWarnButton>
            <TransparentWarnButton @handleClick="console.log('Transparent Warn Button Disabled Clicked')" :disabled="true">
                Transparent Warn Button Disabled
            </TransparentWarnButton>

            <div class="m-4"></div>

            <TransparentPrimaryButton @handleClick="console.log('Transparent Primary Button Clicked')">
                Transparent Primary Button
            </TransparentPrimaryButton>
            <TransparentPrimaryButton @handleClick="console.log('Transparent Primary Button Disabled Clicked')" :disabled="true">
                Transparent Primary Button Disabled
            </TransparentPrimaryButton>

        </div>
    </div>
</template>
<script setup lang="ts">
import BaseButton from '@/components/ButtonComponents/BaseButton.vue';
import PrimaryButton from '@/components/ButtonComponents/PrimaryButton.vue';
import PrimaryButtonBordered from '@/components/ButtonComponents/PrimaryButtonBordered.vue';
import TransparentButton from '@/components/ButtonComponents/TransparentButton.vue';
import TransparentWarnButton from '@/components/ButtonComponents/TransparentWarnButton.vue';
import TransparentPrimaryButton from '@/components/ButtonComponents/TransparentPrimaryButton.vue';


</script>