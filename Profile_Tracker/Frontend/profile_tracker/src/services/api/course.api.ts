/* eslint-disable @typescript-eslint/no-explicit-any */
import { customFetch } from "../utils/customFetch";

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class CourseAPI {
  async getRunningCourses() {
    const response = await customFetch(`${BASE_URL_API}/running-courses/`);
    const data = await response?.json();
    return data;
  }

  async update(id: string, user: any) {
    const response = await fetch(`${BASE_URL_API}/users/`, {
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

export default new CourseAPI();
