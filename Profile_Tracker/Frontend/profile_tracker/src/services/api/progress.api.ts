/* eslint-disable @typescript-eslint/no-explicit-any */
import { customFetch } from "../utils/customFetch";
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class ProgressAPI {
    async getProgress() {
        const response = await customFetch(`${BASE_URL_API}/progress/`);
        const data = await response.json();
        return data;
    }
    
    async update(id: string, user: any) {
        const response = await fetch(`${BASE_URL_API}/users/${id}`, {
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

export default new ProgressAPI();