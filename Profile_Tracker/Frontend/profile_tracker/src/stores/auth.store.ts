// stores/useAuthStore.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import AuthService from "../services/api/auth.api";

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
  message: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (fullname: string, email: string, phoneNumber: string, username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  message: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await AuthService.login(email, password);
      set({ user: response.user, loading: false, message: response.message });
    } catch (err: any) {
      set({
        loading: false,
        error: err.message ?? "Login failed",
        user: null,
      });
    }
  },

  register: async (fullname, email, phoneNumber, username, password) => {
    set({ loading: true, error: null });
    try {
      const response = await AuthService.register(fullname, email, phoneNumber, username, password);
      set({ loading: false, message: response.message });
    } catch (err: any) {
      set({
        loading: false,
        error: err.message ?? "Register failed",
      });
    }
  },

  logout: async () => {
    try {
      await AuthService.logout();
    } finally {
      set({ user: null });
    }
  },
}));
