/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProfileType {
    id: string;
    userId: string;
    bio: string;
    gender: string;
    address: string;
    active: number;
    data?: JSON;
    createdAt: Date;
}

export interface ProfileStateType {
  profile: ProfileType | null;
  loading: boolean;
  error: any;
  message: string | null;
  status: string | null;
}

export interface ProfileFormType {
  bio: string;
  gender: string;
  address: string;
}