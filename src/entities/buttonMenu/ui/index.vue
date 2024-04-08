<template>
    <v-menu :location="location">
        <template v-slot:activator="{ props }">
            <v-btn
                :color="color"
                :icon="icon"
                :variant="variant"
                :density="density"
                v-bind="props"
            >
            <v-icon>
                {{ icon }}
            </v-icon>
          </v-btn>
        </template>
        <slot name="list"></slot>
      </v-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue.js';
import { Anchor, Density, Variant } from '../lib/types/types'


defineProps({
    color: {
        type: String,
        default: ""
    },
    location: {
        type: String as PropType<Anchor>,
        default: "start"
    },
    text: {
        type: String,
        default: ""
    },
    icon: {
        type: String,
        required: true
    },
    density: {
        type: String as PropType<Density>,
        requred: true
    },
    variant: {
        type: String as PropType<Variant>,
        default: 'text'
    }
})

</script>

<style lang="sass">

</style>