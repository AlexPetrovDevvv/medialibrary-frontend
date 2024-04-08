<template>
  <Popup v-model="isOpen" @open="open" @close="close" buttonName="Обновить видео" color="primary" variant="text" class="create-videos">
    <template #content>
        <v-card width="600" class="create-videos__card px-8 py-8">
          <v-card-title class="text-h4 create-videos__title pa-0">Загрузить видео</v-card-title>
            <v-form type="post" class="mt-4">
                <v-container class="pa-0">
                    <v-row class="ml-0 mr-0 mt-8 mb-0 align-center" >
                        <input id="file" type="file" class="d-none" @change="getFile" accept="video/mp4">
                        <v-btn
                                class="text-none mr-4"
                                color="primary"
                                variant="flat"
                            >
                                <label for="file">
                                    Прикрепить файл
                                </label>
                        </v-btn>
                    </v-row>
                    <v-row class="ml-0 mr-0 mt-5 mb-0">
                        <v-btn
                            color="#00B295"
                            variant="flat"
                            @click="confirm"
                          >
                          Загрузить
                        </v-btn>
                    </v-row>
                  </v-container>
            </v-form>
        </v-card>
    </template>
</Popup>
</template>

<script setup lang="ts">
//@ts-ignore
import { Popup } from '@/entities/popup'
import { getToast } from '@/entities/toast';
import { ref, watch } from 'vue';

const uploadVideo = ref(null)
const uploadVideoName = ref('')

function getFile(event: any) {
    uploadVideo.value = event.target.files[0];
    uploadVideoName.value = event.target.files[0].name
}

const emit = defineEmits({
    confirm: null
})

const isOpen = ref(false)

const close = () => {
    isOpen.value = false
}
const open = () => {
    isOpen.value = true
}

const confirm = () => {
    if(uploadVideo.value !== null) {
        emit("confirm", {file: uploadVideo.value, fileName: uploadVideoName.value})
        close()
    } else {
        getToast("error", "Выберите файл")
    }
}

watch(isOpen, () => {
    if(isOpen.value === false) {
        uploadVideo.value = null
        uploadVideoName.value = ""
    }
})
</script>

<style lang="sass">

</style>