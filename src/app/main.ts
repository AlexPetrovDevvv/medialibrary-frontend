import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from '@/pages/lib/router/router'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          error: "#AB2346",
          success: "#006655",
          background: "#00B295"
        }
      }
    }
  },
  components,
  directives,
})

createApp(App).use(createPinia()).use(vuetify).use(router).mount('#app')
