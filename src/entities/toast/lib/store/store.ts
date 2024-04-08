import { defineStore } from "pinia"
import { ref} from "vue"

export const useToastStore = defineStore('toast', () => {
    const toastSettings = ref({
        color: '',
        text: '',
        timeout: 2000,
        open: false
    })
    return { toastSettings }
  })