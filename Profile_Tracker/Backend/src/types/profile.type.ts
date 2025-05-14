export interface ProfileModel {
    id: string;
    userId: string;
    bio: string;
    gender: string;
    address: string;
    active: number;
    data?: JSON;
}