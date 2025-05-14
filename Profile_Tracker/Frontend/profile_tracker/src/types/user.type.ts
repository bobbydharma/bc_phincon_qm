/* eslint-disable @typescript-eslint/no-explicit-any */

  export interface UserType {
    id: string;
    fullname: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    active: number;
    data?: JSON;
}

export interface UserStateType {
  user: UserType | null;
  loading: boolean;
  error: any;
  message: string | null;
  status: string | null;
}

export interface UserFormType {
  fullname: string;
  email: string;
  phoneNumber: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  bio: string;
  gender: string;
  address: string;
  active: number;
  data: string;
  createdAt: Date;
  updatedAt: Date;
}
  
  export interface User {
    id: string;
    fullname: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    active: number;
    data: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Course {
    id: string;
    title: string;
    description: string;
    progress: number;
    totalModules: number;
    completedModules: number;
    totalDuration: number;
    spentDuration: number;
    imageUrl: string;
  }
  
  export interface Tryout {
    id: string;
    title: string;
    description: string;
    progress: number;
    totalQuestions: number;
    completedQuestions: number;
    deadline: Date;
    imageUrl: string;
  }