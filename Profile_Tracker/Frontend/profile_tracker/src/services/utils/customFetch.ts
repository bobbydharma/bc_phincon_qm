/* eslint-disable @typescript-eslint/no-unused-vars */
import { logout } from "../../utils/auth.helper";
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

export const customFetch = async (url: string, options: RequestInit = {}) => {
  const accessToken = localStorage.getItem("accessToken");

  const fetchWithAuth = async () => {
    const headers = {
      ...options.headers,
      Authorization: accessToken ? `Bearer ${atob(accessToken)}` : "",
      "Content-Type": "application/json",
    };

    const response = await fetch(`${url}`, {
      ...options,
      headers,
      credentials: "include",
    });

    if (response.status === 401) {
      const refreshed = await refreshToken();
      if (refreshed) {
        const newAccessToken = localStorage.getItem("accessToken");
        const retryHeaders = {
          ...options.headers,
          Authorization: newAccessToken ? `Bearer ${atob(newAccessToken)}` : "",
          "Content-Type": "application/json",
        };

        const retryResponse = await fetch(`${url}`, {
          ...options,
          headers: retryHeaders,
          credentials: "include",
        });

        if (!retryResponse.ok) {
          const errorData = await retryResponse.json();
          throw { status: retryResponse.status, ...errorData };
        }

        return retryResponse;
      }
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw { status: response.status, ...errorData };
    }

    return response;
  };

  return fetchWithAuth();
};

const refreshToken = async (): Promise<boolean> => {
  try {
    const res = await fetch(`${BASE_URL_API}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Refresh token expired");

    const data = await res.json();
    if (data.accessToken) {
      localStorage.setItem("accessToken", btoa(data.accessToken));
      return true;
    }

    return false;
  } catch (error) {
    logout();
    return false;
  }
};
