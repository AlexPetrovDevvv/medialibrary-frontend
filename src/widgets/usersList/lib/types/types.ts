export enum EUserRole {
    admin = "Администратор",
    user = "Пользователь"
}

export interface IUser {
    _id: string;
    email: string;
    login: string;
    password: string;
    role: EUserRole;
    createdAt: Date;
    updatedAt: Date;
    fullname: string;
}

export interface ICreateUser {
    email: string;
    login: string;
    role: EUserRole;
    fullname: string;
}
