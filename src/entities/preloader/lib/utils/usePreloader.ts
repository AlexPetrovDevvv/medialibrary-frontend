import { usePreloaderStore } from "../store/store";


function togglePreloader(value: boolean) {
    const preloader = usePreloaderStore()
    preloader.togglePreloader(value)
}


export { togglePreloader }