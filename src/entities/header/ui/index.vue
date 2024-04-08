<template>
    <v-app-bar prominent :elevation="0">
        <slot name="menu"></slot>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="buttons"></slot>
    </v-app-bar>
</template>

<script setup lang="ts">

defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<style lang="sass">

</style>