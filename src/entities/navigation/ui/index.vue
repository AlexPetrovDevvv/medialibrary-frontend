<template>
    <v-navigation-drawer clipped floating temporary app v-model="drawer">
        <v-list nav>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                :to="item.path"
                link
                :active-class="route.path === item.path ? 'custom-active-class' : 'custom-class'"
                v-show="item.role.includes(role)"
            >
                <v-list-item-title class="text-body-1">{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { PropType,} from 'vue';
import { INavigationItem } from '../lib/types/types';
import { useRoute } from 'vue-router';

defineProps({
    items: {
        type: Array as PropType<INavigationItem[]>,
        required: true
    }
})

let freshRole = localStorage.getItem("role")
let role: string = ''

if( freshRole !== null ) {
    role = freshRole
} else {
    role = 'Пользователь'
}
const route = useRoute()

const drawer = defineModel<boolean | null | undefined>()

</script>

<style lang="sass">

.custom-active-class
    .v-list-item__overlay
        opacity: 0.12 !important

.custom-class
    .v-list-item__overlay
        opacity: 0 !important

</style>