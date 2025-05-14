/* eslint-disable @typescript-eslint/no-explicit-any */
// stores/useProductStore.ts
import { create } from "zustand";
import TryoutSectionAPI from "../services/api/tryoutsection.api.js";
import type { TryoutSectionStateType } from "../types/tryout-section.type.js";

export const useTryoutSectionStore = create<
  TryoutSectionStateType & {
    getRunningTryoutSection: () => Promise<void>;
  }
>((set) => ({
  tryoutResponse: {
    tryoutSections: null,
    progressTryourt: 0,
  },
  loading: false,
  error: null,
  message: null,
  status: null,

  getRunningTryoutSection: async () => {
    set({ loading: true, error: null });
    try {
      const response = await TryoutSectionAPI.getRunningTryoutSections();
      set({
        loading: false,
        tryoutResponse: {
          tryoutSections: response.data.tryouts,
          progressTryourt: response.data.progressTryout,
        },
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
}));
