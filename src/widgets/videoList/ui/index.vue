<template>
    <table-container>
        <template #head>
            <tr>
               <th v-for="item in Videos.videoNameList" class="video-cell video-cell-head text-caption font-weight-bold">
                    {{ item }}
               </th>
            </tr>
        </template>
        <template #body>
            <tr v-for="item in Videos.videoList">
                <td>
                    {{ item.name }}
                </td>
                <td class="d-flex justify-space-between align-center">
                    {{ item.url }}
                    <v-btn density="comfortable" variant="text" icon @click="copyUrl(item.url)">
                        <v-icon>
                            mdi-content-copy
                        </v-icon>
                    </v-btn>
                </td>
                <td>
                    <button-menu density="comfortable" icon="mdi-dots-vertical" location="right top">
                        <template #list>
                            <v-list>
                                <v-list-item class="d-flex justify-center">
                                    <template v-slot:append>
                                        <delete-videos @confirm="deleteVideo({ id: item._id })"/>
                                    </template>
                                </v-list-item>
                                <v-list-item class="d-flex justify-center">
                                    <template v-slot:append>
                                        <update-videos @confirm="(element) => update(element, item._id)"/>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </template>
                    </button-menu>
                </td>
            </tr>
        </template>
    </table-container>
</template>

<script setup lang="ts">
import { TableContainer } from '@/entities/table';
import { useVideoList } from '../lib/store/store';
import { ButtonMenu } from '@/entities/buttonMenu';
import { deleteVideos } from '@/features/videos/deleteVideos';
import { updateVideos } from '@/features/videos/updateVideos';
import { getToast } from '@/entities/toast';
import {deleteVideo, updateVideo } from '../lib/utils/useVideo';

interface FileObject  {
    file: File,
    fileName: string
}

const Videos = useVideoList()

function copyUrl(item: string) {
    navigator.clipboard.writeText(item).then(
    function() {
      /* clipboard successfully set */
      getToast('success', "Url скопирован")
    },
    function() {
      /* clipboard write failed */
      getToast('error', "Url не скопирован")
    }
  )
}

const update = async (item: FileObject, id: string) => {
    const formData = new FormData()
    formData.append('id', id)
    formData.append('file', item.file, item.fileName)
    //@ts-ignore
    return await updateVideo(formData)
}

</script>

<style lang="sass">
    .video-cell
        width: 33.3%
        &-head
            color: #757575
</style>