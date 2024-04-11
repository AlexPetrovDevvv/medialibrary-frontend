<template>
    <v-btn
        :color="color"
        :variant="variant"
        :density="density"
        :icon="icon"
        class="text-none"
        @click.stop="open"
    >
        {{ buttonName }}
        <v-icon v-if="iconLink" > {{ iconLink }} </v-icon>
        <v-tooltip
            v-if="tooltipName"
            activator="parent"
            location="bottom"
        >{{ tooltipName }}</v-tooltip>
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
import { Variant, Density } from '../lib/types/types';

defineProps({
    buttonName: {
        type: String
    },
    color: {
        type: String,
        default: "#000"
    },
    variant: {
        type: String as PropType<Variant>,
        default: "text"
    },
    iconLink: {
        type: String,
    },
    icon: {
        type: Boolean,
        default: false
    },
    tooltipName: {
        type: String
    },
    density: {
        type: String as PropType<Density>,
        default: "default"
    }
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