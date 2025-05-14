/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// stores/useProductStore.ts
import { create } from "zustand";
import ProfileAPI from "../services/api/profile.api";
import type { ProfileFormType, ProfileStateType } from "../types/profile.type";

export const useProfileStore = create<ProfileStateType & {
  getProfile: () => Promise<void>;
  updateProfile: (data: ProfileFormType) => Promise<void>;
}>((set, get) => ({
  profile: null,
  loading: false,
  error: null,
  message: null,
  status: null,

  getProfile: async () => {
    set({ loading: true, error: null });
    try {
      const response = await ProfileAPI.getProfile();
      set({
        loading: false,
        profile: response.data,
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

  updateProfile: async (userData: ProfileFormType) => {
    set({ loading: true, error: null });
    try {
      const response = await ProfileAPI.update(userData);
      set ({
        loading: false,
        message: response.message,
        status: response.status
      });
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data || "Terjadi kesalahan",
      });
    }
  },
}));
