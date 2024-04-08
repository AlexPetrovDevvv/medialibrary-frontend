// import { updateContactsType } from './../shemas/updateUserShema';
// import { UserRole } from './../types/users';
// import {createUserType} from './../shemas/userShema';

// export default function(instance: any) {
//     return {
//         // //Информация о пользователе
//         getUserInfo() {
//             return instance.get('auth/contacts');
//         },
//         updateUserInfo(contacts: updateContactsType) {
//             return instance.patch('auth/contacts', contacts);
//         },
//         createNewUser(payload: createUserType) {
//             return instance.post('users', payload);
//         },
//         getUsersList() {
//             return instance.get('users');
//         },
//         updateUserRole(userId: string, role: UserRole) {
//             return instance.patch(`users/${userId}/role`, {role});
//         },
//         deleteUser(userId: string) {
//             return instance.delete(`users/${userId}`, {userId});
//         }
//     }
// }

// export {
// }