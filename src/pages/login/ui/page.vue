<template>
    <div class="login">
        <div class="login__container">
            <h1 class="login__title">Вход</h1>
            <v-form type="post" v-model="valid" class="login__form">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="values.login"
                        :rules="[required]"
                        label="Логин"
                        variant="underlined"
                        autocomplete="username"
                        hide-details
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="login__form-row">
                    <v-col>
                      <v-text-field
                        v-model="values.password"
                        :rules="[required]"
                        :type="showPassword ? 'text' : 'password'"
                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append-inner="showPassword = !showPassword"
                        label="Пароль"
                        variant="underlined"
                        autocomplete="new-password"
                        hide-details
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center" class="login__form-row">
                      <v-btn
                          class="login__button"
                          color="#00B295"
                          variant="flat"
                          @click.prevent="submit"
                        >
                        войти
                      </v-btn>
                  </v-row>
                </v-container>
              </v-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {loginShema} from '../lib/shemas/loginShema'
import { getToast } from '@/entities/toast'
import { instance } from '@/shared/lib/api'
import router from '@/pages/lib/router/router';

const valid = ref(false)
const values = ref({
    login: '',
    password: ''
})

function required(v: any) {
    return !!v || 'Поле обязательно для заполнения'
}

const errors = ref({
    login: '',
    password: ''
})
const showPassword = ref(false)

const login = async () => {
    try {
        const res = await instance.post('auth', values.value)
        document.cookie = `access_token=${res.data.accessToken}; max-age=3600; path=/`
        localStorage.setItem("role", res.data.role)
        router.push({name: 'main'})
        getToast('success', "Вы успешно авторизовались")
    }
    catch (err: any) {
        getToast('error', err.response.data.message)
    }
}

async function submit() {
        try {
            await loginShema.validate(values.value, { abortEarly: false })
            errors.value = {
                login: "",
                password: ""
            }
            return await login()
        }
        catch(err: any) {
            console.log(err.inner)
            // @ts-ignore
            err.inner.forEach((error) => {
            // @ts-ignore
            getToast('error', error.message)
            });
        }
  }

</script>

<style lang="sass">
    .login
        width: 100%
        height: 100vh
        display: flex
        align-items: center
        justify-content: center
        &__container
            max-width: 600px
            width: 100%
            padding: 40px
            background-color: var(--white)
        &__title
            font-size: 60px
            font-weight: 500
            text-align: center
        &__form
            margin-top: 20px
            &-row
                margin-top: 40px !important
</style>@/pages/lib/router/router@/entities/toast/lib/utils/useToast@/pages/login/lib/shemas/loginShema