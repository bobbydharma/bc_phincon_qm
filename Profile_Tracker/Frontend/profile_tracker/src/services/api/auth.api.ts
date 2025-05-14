// src/services/authService.ts
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class AuthService {
  async login(username: string, password: string) {
    const res = await fetch(`${BASE_URL_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message ?? "Login failed");
    }

    const data = await res.json();
    localStorage.setItem("accessToken", btoa(data.accessToken));
    return data;
  }

  async register(fullname: string, email: string, phoneNumber: string, username: string, password: string) {
    const res = await fetch(`${BASE_URL_API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, phoneNumber, username, password }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message ?? "Register failed");
    }

    return await res.json();
  }

  async logout() {
    localStorage.removeItem("accessToken");
    await fetch(`${BASE_URL_API}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  }
}

export default new AuthService();
