<template>
    <v-snackbar
      :timeout=toast.toastSettings.timeout
      :color=toast.toastSettings.color
      v-model="toast.toastSettings.open"
    >
      {{ toast.toastSettings.text }}
    </v-snackbar>
</template>

<script setup lang="ts">

import { useToastStore } from '../lib/store/store'

const toast = useToastStore()

</script>

<style lang="sass">

</style>../lib/store/store