<template>
    <button
        :disabled="props.disabled"
        type="button"
        :class="[{
            'w-full': props.fullWidth,
            'w-fit': !props.fullWidth
        }, 
        ]"
        @click="emit('buttonClick')"
    >
        <div 
            :class="[{
                'border': props.borderColor,
                'border-solid': props.borderColor
            },
                props.paddingWidth,
                props.paddingHeight,
                props.marginWidth,
                props.marginHeight,
                props.backgroundColor,
                props.roundedType,
                props.fontBoldType,
                props.borderColor,
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
        default: ''
    },
    marginHeight: {
        type: String,
        default: ''
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    borderColor: {
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
    (e: 'buttonClick'): void
}>();

</script>