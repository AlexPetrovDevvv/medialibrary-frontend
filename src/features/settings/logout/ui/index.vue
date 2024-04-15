<template>
    <Popup v-model="isOpen" @open="open" @close="close" :icon="true" iconLink="mdi-logout" tooltipName="Выйти из приложения" density="comfortable">
        <template #content>
            <v-card width="600" class="px-8 py-8">
                <v-card-title class="text-h5 pa-0">Вы точно хотите хотите выйти</v-card-title>
                <v-card-actions class="mt-8 px-0 py-0">
                    <v-btn @click.prevent="logout" class="py-2 px-4 text-button" size="medium" variant="flat" color="error">
                        Да
                    </v-btn>

                    <v-btn @click="close" class="ml-4 py-2 px-4 text-button" size="medium" variant="flat" color="success">
                        Нет
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </Popup>
</template>

<script setup lang="ts">
import { Popup } from '@/entities/popup';
import router from '@/pages/lib/router/router';
import { ref } from 'vue';
import { instance } from '@/shared/lib/api'

const isOpen = ref(false)

const close = () => {
    isOpen.value = false
}
const open = () => {
    isOpen.value = true
}


async function logout() {
    try {
        await instance.delete('auth')
        document.cookie = "access_token=;max-age=-1;path=/";
        isOpen.value = false
        router.push({name: 'login'})
    } catch (error) {
    }
}

</script>

<style lang="sass">

</style>