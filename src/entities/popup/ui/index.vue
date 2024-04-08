<template>
    <v-btn
        :color="color"
        :variant="variant"
        class="text-none"
        @click.stop="open"
    >
        {{ buttonName }}

        <v-overlay
          v-model="isOpen"
          scroll-strategy="block"
          class="align-center justify-center"
        >
          <slot name="content" :close="close" :open="open"></slot>
        </v-overlay>
      </v-btn>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Variant } from '../lib/types/types';

defineProps({
    buttonName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "#000"
    },
    variant: {
        type: String as PropType<Variant>,
        default: "text"
    },
})

const isOpen = defineModel<boolean | undefined>()

const emit = defineEmits({
    close: null,
    open: null
})
const close = () => {
    emit("close")
}

const open = () => {
    emit("open")
}



</script>

<style lang="sass">

</style>