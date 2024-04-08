<template>
    <div class="content">
        <v-container class="container">
            <v-card width="800" class="create-videos__card px-8 py-8 main">
                <div class="d-flex flex-column align-center w-100">
                    <v-card-title class="text-h4 create-videos__title pa-0 text-center ">Добро пожаловать</v-card-title>
                    <p class="mt-5 text-center text-subtitle-1 font-weight-bold">Вы находитесь в хабе медиабиблиотеки</p>
                    <div class="d-flex mt-10 g-5">
                        <router-link class="main__link" :to="{name: 'video'}">Видео</router-link>
                        <!-- <router-link></router-link> -->
                    </div>
                </div>
              </v-card>
        </v-container>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass">

.main
    margin: 0 auto
    &__link
        display: flex
        align-items: center
        height: 36px
        padding: 0 16px
        border-radius: 4px
        background-color: #1976D2
        color: #fff
        text-decoration: none
</style>