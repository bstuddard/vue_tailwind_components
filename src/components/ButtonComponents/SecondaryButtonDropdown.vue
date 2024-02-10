<template>
    <div class="relative w-fit" :class="[props.marginWidth, props.marginHeight]">
        <SecondaryButton 
            @handleClick="emit('handleClick')"
            :backgroundColor="props.disabled ? 'bg-gray-500': 'bg-standard-500'"
            :fullWidth="props.fullWidth"
            :disabled="props.disabled"
            :buttonText="props.buttonText"
            marginWidth="mx-0"
            marginHeight="my-0"
            :roundedType="props.roundedType"
            :fontBoldType="props.fontBoldType"
            paddingHeight="py-0"
            paddingWidth="px-0"
        >
            <div :class="{
                'text-standard-50': !props.disabled,
                'text-gray-50': props.disabled
            }">
                <div class="flex flex-row justify-center items-stretch divide-x">
                    <div class="pr-4 py-2 pl-4 flex items-center justify-center">
                        <slot>Button Text</slot>
                    </div>
                    <button 
                        type="button" 
                        class="pl-2 py-2 pr-2 flex items-center justify-center pb-1" 
                        :class="{
                            'bg-standard-600': showDropdownList,
                            'rounded-r-md': showDropdownList
                        }" 
                        @click.stop="showDropdownList = !showDropdownList"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.0rem" fill="currentColor" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    </button>
                </div>
            </div>
        </SecondaryButton>
        <menu v-if="showDropdownList" class="absolute top-full left-0 w-full bg-white rounded-b-md shadow-md z-20">
            <li v-for="item in menuItemList" :key="item" class="w-full m-3">
                <button type="button" class="w-full text-left" @click.stop="emit('handleMenuClick', item); showDropdownList=false;">
                    <span class="p-2 text-standard-700">{{ item }}</span>
                </button> 
            </li>
        </menu>
    </div>
</template>
<script setup lang="ts">
import SecondaryButton from './SecondaryButton.vue';

import { ref } from 'vue';
import type { Ref } from 'vue';

const showDropdownList: Ref<boolean> = ref(false);

const props = defineProps({
    fullWidth: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    buttonText: {
        type: String,
        default: 'Button Text'
    },
    marginWidth: {
        type: String,
        default: 'mx-6'
    },
    marginHeight: {
        type: String,
        default: 'my-4'
    },
    roundedType: {
        type: String,
        default: 'rounded-md'
    },
    fontBoldType: {
        type: String,
        default: ''
    },
    menuItemList: {
        type: Array<string>,
        required: true
    }
});

const emit = defineEmits<{
    (e: 'handleMenuClick', menuItemName: string): void,
    (e: 'handleClick'): void
}>();

</script>