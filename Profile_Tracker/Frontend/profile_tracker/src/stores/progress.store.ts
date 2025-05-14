/* eslint-disable @typescript-eslint/no-explicit-any */
// stores/useProductStore.ts
import { create } from "zustand";
import ProgressAPI from "../services/api/progress.api";
import type { ProgressType, ProgressStateType } from "../types/progress.type";

export const useProgressStore = create<ProgressStateType & {
  getProgress: () => Promise<void>;
  updateProduct: (data: ProgressType) => Promise<void>;
}>((set) => ({
  progress: null,
  loading: false,
  error: null,
  message: null,
  status: null,

  getProgress: async () => {
    set({ loading: true, error: null });
    try {
      const response = await ProgressAPI.getProgress();
      set({
        loading: false,
        progress: response.data.progress,
        message: response.message,
        status: response.status,
      });
    } catch (error: any) {
      set({
        loading: false,
        message: error.message,
        error: error.response?.data ?? "Terjadi kesalahan",
      });
    }
  },

  updateProduct: async (progressData: ProgressType) => {
    set({ loading: true, error: null });
    try {
      const response = await ProgressAPI.update("", progressData);
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
