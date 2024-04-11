<template>
    <v-overlay
      v-model="preloader.preloader"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="#00B295"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
</template>

<script setup lang="ts">
import { usePreloaderStore } from '../lib/store/store';


const preloader = usePreloaderStore()


</script>

<style lang="sass">

</style>