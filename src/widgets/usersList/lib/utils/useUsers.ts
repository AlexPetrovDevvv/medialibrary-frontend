import { getToast } from "@/entities/toast";
import { createUserShema } from "../shemas/userShema";
import { useUserList } from "../store/store";
import { ICreateUser } from "../types/types";



async function  createUser(data: ICreateUser ) {
    const userStore = useUserList()
    try {
        await createUserShema.validate(data, { abortEarly: false })
        return await userStore.createUser(data)
    }
    catch(err: any) {
        console.log(err.inner)
        // @tse-ignore
        err.inner.forEach((error: any) => {
            // @ts-ignore
            getToast('error', error.message)
        });
    }
}


async function deleteUsers(id: string) {
    const userStore = useUserList()
    try {
        await userStore.deleteUser(id)
    }
    catch(err: any) {
        //@ts-ignore
        getToast('error', error.message)
    }

}


export { createUser, deleteUsers }