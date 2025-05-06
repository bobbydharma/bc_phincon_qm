/* eslint-disable @typescript-eslint/no-explicit-any */
import ModelAPI from "../../abstract/model.abstract.ts";
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class ProductAPI extends ModelAPI {
    constructor() {
        super();
    }
    async getById(id: string) {
        const response = await fetch(`${BASE_URL_API}/products/${id}`);
        const data = await response.json();
        return data;
    }
    async getAll() {
        const response = await fetch(`${BASE_URL_API}/products`, {
            method: "GET",
            credentials: "include",
        });
        const data = await response.json();
        return data;
    }
    async create(product: any) {
        const response = await fetch(`${BASE_URL_API}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    }
    async update(id: string, user: any) {
        const response = await fetch(`${BASE_URL_API}/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data;
    }
    async delete(id: string) {
        const response = await fetch(`${BASE_URL_API}/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    }
}

export default new ProductAPI();