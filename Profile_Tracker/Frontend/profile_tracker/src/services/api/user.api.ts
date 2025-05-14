import type { ProfileFormType } from "../../types/profile.type";
import type { UserFormType } from "../../types/user.type";
import { customFetch } from "../utils/customFetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class UserAPI {
    async getUser() {
        const response = await customFetch(`${BASE_URL_API}/users/`);
        const data = await response.json();
        return data;
    }
    
    async update(user: UserFormType, profile: ProfileFormType) {
        const response = await customFetch(`${BASE_URL_API}/users/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user, profile}),
        });
        const data = await response.json();
        return data;
    }
}

export default new UserAPI();