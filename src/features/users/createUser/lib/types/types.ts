export enum EUserRole {
    admin = "Администратор",
    user = "Пользователь"
}

export interface IUser {
    email: string;
    login: string;
    role: EUserRole;
    fullname: string;
}