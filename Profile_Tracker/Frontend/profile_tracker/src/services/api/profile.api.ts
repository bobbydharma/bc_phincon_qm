/* eslint-disable @typescript-eslint/no-explicit-any */
import { customFetch } from "../utils/customFetch";
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class ProfileAPI {
  async getProfile() {
    const response = await customFetch(`${BASE_URL_API}/profiles/`);
    const data = await response.json();
    return data;
  }

  async update(user: any) {
    const response = await fetch(`${BASE_URL_API}/profiles/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }
}

export default new ProfileAPI();
