export interface UserModel {
    id: string;
    username: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum Role {
    Admin = 'admin',
    Cashier = 'cashier',
  }