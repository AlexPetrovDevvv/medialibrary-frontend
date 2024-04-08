
<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade">
            <component :is="Component" :key="route.path"/>
        </transition>
    </router-view>
    <Toast/>
</template>

<script setup lang="ts">
import { Toast } from '@/entities/toast'

</script>

<style lang="sass">

</style>
