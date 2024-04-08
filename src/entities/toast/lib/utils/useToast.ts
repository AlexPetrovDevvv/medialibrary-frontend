import { useToastStore } from '../index';

function getToast (status:status, message: string) {
    const toast = useToastStore()
    switch(status) {
        case "error":
        toast.toastSettings = {
            color: "error",
            text: message,
            open: true,
            timeout: 2000
        }
        break
        default:
        return toast.toastSettings = {
            color: "success",
            text: message,
            open: true,
            timeout: 2000
        }
    }
}

type status = "error" | "success"


export {getToast}