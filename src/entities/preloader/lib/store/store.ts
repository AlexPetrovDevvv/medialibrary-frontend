import { defineStore } from "pinia"
import { ref} from "vue"

export const usePreloaderStore = defineStore('preloader', () => {
    const preloader = ref(false)

    const togglePreloader = (value: boolean) => {
        if(preloader.value === value) {
            return preloader.value
        } else {
            return preloader.value = value
        }
    }

    return { preloader, togglePreloader }
})