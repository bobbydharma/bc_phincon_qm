/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// stores/useProductStore.ts
import { create } from "zustand";
import UserAPI from "../services/api/user.api";
import type { UserFormType, UserStateType } from "../types/user.type";
import type { ProfileFormType } from "../types/profile.type";

export const useUserStore = create<UserStateType & {
  getUser: () => Promise<void>;
  updateUser: (dataUser: UserFormType, dataProfile: ProfileFormType) => Promise<void>;
}>((set, get) => ({
  user: null,
  loading: false,
  error: null,
  message: null,
  status: null,

  getUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await UserAPI.getUser();
      set({
        loading: false,
        user: response.data,
        message: response.message,
        status: response.status,
      });
    } catch (error: any) {
      set({
        loading: false,
        message: error.message,
        error: error.response?.data || "Terjadi kesalahan",
      });
    }
  },

  updateUser: async (dataUser: UserFormType, dataProfile: ProfileFormType) => {
    set({ loading: true, error: null });
    try {
      const response = await UserAPI.update(dataUser, dataProfile);
      set ({
        loading: false,
        message: response.message,
        status: response.status
      });
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data ?? "Terjadi kesalahan",
      });
    }
  },
}));
