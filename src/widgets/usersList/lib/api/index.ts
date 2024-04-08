import { instance } from "@/shared/lib/api";
import { EUserRole, ICreateUser } from "../types/types";


function UserApi (instance: any) {
    return {
        createNewUser(payload: ICreateUser) {
            return instance.post('users', payload);
        },
        getUsersList() {
            return instance.get('users');
        },
        updateUserRole(userId: string, role: EUserRole) {
            return instance.patch(`users/${userId}/role`, {role});
        },
        deleteUser(userId: string) {
            return instance.delete(`users/${userId}`, {userId});
        }
    }
}


export default {
    users: UserApi(instance),
}