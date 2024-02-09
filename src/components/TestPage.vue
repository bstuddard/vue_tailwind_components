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

        </div>
    </div>
</template>
<script setup lang="ts">
import BaseButton from '@/components/ButtonComponents/BaseButton.vue';
import PrimaryButton from '@/components/ButtonComponents/PrimaryButton.vue';


</script>