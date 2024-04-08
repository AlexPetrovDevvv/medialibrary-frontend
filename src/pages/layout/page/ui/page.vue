<template>
    <v-app class="page">
        <Header @user-hook="item => createUser(item)" @video-hook="item => createVideo(item)" @toggle-menu="toggleMenu" :items="items"/>
        <!-- navigation -->
        <Navigation :items="items" v-model="menu"/>
        <v-main class="page__content">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { Navigation } from '@/entities/navigation';
import { Header } from '@/widgets/header';
import { createVideo } from '@/widgets/videoList';
import { createUser } from '@/widgets/usersList'
import { ref } from 'vue';

const items = [
    {
        title: 'Главная',
        path: '/',
        role: ["Пользователь", "Администратор"]
    },
    {
        title: 'Видео',
        path: '/video',
        role: ["Пользователь", "Администратор"]
    },
    {
        title: 'Пользователи',
        path: '/users',
        role: ["Администратор"]
    },
]

const menu = ref(false)


const toggleMenu = () => {
    if(menu.value === false) {
        menu.value = true
    } else {
        menu.value = false
    }
}




</script>

<style lang="sass">

.page
    &__content
        padding: 180px 0 100px 0 !important




</style>