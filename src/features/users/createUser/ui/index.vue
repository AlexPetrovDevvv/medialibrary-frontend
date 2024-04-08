<template>
    <Popup v-model="isOpen" @open="open" @close="close" buttonName="Создать пользователя" color="primary" variant="flat" class="create-videos">
        <template #content>
            <v-card width="600" class=" px-8 py-8">
              <v-card-title class="text-h4 pa-0">Создать пользователя</v-card-title>
                <v-form type="post" class="mt-4">
                    <v-container class="pa-0">
                        <v-row class="ml-0 mr-0 mt-3 mb-0">
                          <v-col class="pa-0">
                            <v-text-field
                                v-model="user.fullname"
                                :rules="[required]"
                                label="Имя пользователя"
                                variant="underlined"
                                autocomplete="off"
                                hide-details
                                required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="ml-0 mr-0 mt-8 mb-0 align-center" >
                            <v-text-field
                                v-model="user.email"
                                :rules="[required, validateEmail]"
                                label="Email пользователя"
                                variant="underlined"
                                autocomplete="off"
                                hide-details
                                required
                            ></v-text-field>
                        </v-row>
                        <v-row class="ml-0 mr-0 mt-8 mb-0 align-center" >
                            <v-text-field
                                v-model="user.login"
                                :rules="[required]"
                                label="Логин пользователя"
                                variant="underlined"
                                autocomplete="off"
                                hide-details
                                required
                            ></v-text-field>
                        </v-row>
                        <v-row class="ml-0 mr-0 mt-8 mb-0 align-center" >
                            <v-select
                                v-model="user.role"
                                label="Роль пользователя"
                                :items="roles"
                                variant="underlined"
                            ></v-select>
                        </v-row>
                        <v-row class="ml-0 mr-0 mt-5 mb-0">
                            <v-btn
                                color="#00B295"
                                variant="flat"
                                @click="confirm"
                              >
                              Создать
                            </v-btn>
                        </v-row>
                      </v-container>
                </v-form>
            </v-card>
        </template>
    </Popup>
</template>

<script setup lang="ts">
import { Popup } from '@/entities/popup'
import { getToast } from '@/entities/toast';
import { ref, watch } from 'vue';
import { IUser, EUserRole } from '../lib/types/types';


const user = ref<IUser>({
    email: '',
    login: '',
    fullname: '',
    role: EUserRole.user
})

const roles = Object.values(EUserRole)

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
    if(user.value.email !== '' && user.value.login !== '' && user.value.fullname !== '') {
        emit("confirm", user.value)
        close()
    } else {
        getToast('error', 'Заполните данные')
    }
}

function required(v: any) {
    return !!v || 'Поле обязательно для заполнения'
}

function validateEmail(v: any) {
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v)) {
        return true
    } else {
        return "Email заполненен неправильно"
    }
}

watch(isOpen, () => {
    if(isOpen.value === false) {
        user.value.fullname = ''
        user.value.email = ''
        user.value.login = ''
        user.value.role = EUserRole.user
    }
})


</script>

<style lang="sass">
</style>