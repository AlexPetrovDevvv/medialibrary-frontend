<template>
    <Popup v-model="isOpen" @open="open" @close="close" buttonName="Удалить пользователя" color="error">
        <template #content>
            <v-card width="600" class="px-8 py-8">
                <v-card-title class="text-h5 pa-0">Вы точно хотите удалить пользователя?</v-card-title>
                <v-card-actions class="mt-8 px-0 py-0">
                    <v-btn @click="confirm" class="py-2 px-4 text-button" size="medium" variant="flat" color="error">
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
import { ref } from 'vue';


const isOpen = ref(false)

const emit = defineEmits({
    confirm: null
})

const close = () => {
    isOpen.value = false
}
const open = () => {
    isOpen.value = true
}

const confirm = () => {
    emit("confirm")
    close()
}

</script>

<style lang="sass">

</style>