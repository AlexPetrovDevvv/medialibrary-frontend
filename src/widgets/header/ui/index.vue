<template>
    <header-layout :title="title">
        <template #menu>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="toggleMenu"
        ></v-app-bar-nav-icon>
        </template>
        <template #buttons>
            <Transition>
                <create-videos v-if="route.path === '/video'" @confirm="item => videoHook(item)"/>
            </Transition>
            <Transition>
                <create-user v-if="route.path === '/users'" @confirm="item => userHook(item)"/>
            </Transition>
            <button-menu variant="text" icon="mdi-dots-vertical" location="right top">
                <template #list>
                    <v-list>
                        <v-list-item class="d-flex justify-center">
                            <template v-slot:append>
                                <loggout-button/>
                            </template>
                        </v-list-item>
                    </v-list>
                </template>
            </button-menu>
        </template>
    </header-layout>
</template>

<script setup lang="ts">
import { ButtonMenu } from '@/entities/buttonMenu';
import { HeaderLayout } from '@/entities/header';
import { createVideos } from '@/features/videos/createVideos';
import { CreateUser } from '@/features/users/createUser';
import { useRoute } from 'vue-router';
import { PropType, computed } from 'vue';
import { loggoutButton } from '@/features/settings/logout';
const route = useRoute()

interface IItem {
    title: string
    path: string
}

interface User {
    email: string;
    login: string;
    role: string;
    name: string;
}

const props = defineProps({
    items: {
        type: Array as PropType<IItem[]>,
        required: true
    },
})

const title = computed(() => {
    let text: string = ''
    props.items.map((item) => {
        if(item.path === route.path) {
            text = item.title
        }
    })
    return text
})


const emit = defineEmits({
    toggleMenu: null,
    videoHook: null,
    userHook: null

})
const toggleMenu = () => {
    emit("toggleMenu")
}

const videoHook = (item: FormData) => {
    emit('videoHook', item)
}

const userHook = (item: User) => {
    emit('userHook', item)
}

</script>

<style lang="sass">

.v-enter-active,
.v-leave-active
  transition: opacity 0.5s ease


.v-enter-from,
.v-leave-to
  opacity: 0


</style>