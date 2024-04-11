
<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade">
            <component :is="Component" :key="route.path"/>
        </transition>
    </router-view>
    <Toast/>
    <Preloader/>
</template>

<script setup lang="ts">
import { Toast } from '@/entities/toast'
import { Preloader } from '@/entities/preloader';
</script>

<style lang="sass">

</style>
