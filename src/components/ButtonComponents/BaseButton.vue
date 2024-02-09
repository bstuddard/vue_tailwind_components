<template>
    <button
        :disabled="props.disabled"
        type="button"
        :class="[{
            'w-full': props.fullWidth
        }, 
        ]"
        @click="emit('handleClick')"
    >
        <div 
            :class="[{},
                props.paddingWidth,
                props.paddingHeight,
                props.marginWidth,
                props.marginHeight,
                props.backgroundColor,
                props.roundedType,
                props.fontBoldType
            ]"
        >
            <slot>Button Text</slot>
        </div>
    </button>
</template>
<script setup lang="ts">

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
        default: 'mx-6'
    },
    marginHeight: {
        type: String,
        default: 'my-4'
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    roundedType: {
        type: String,
        default: 'rounded-md'
    },
    fontBoldType: {
        type: String,
        default: ''
    }
});


const emit = defineEmits<{
    (e: 'handleClick'): void
}>();

</script>