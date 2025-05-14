import { customFetch } from "../utils/customFetch";

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

class TryoutSectionAPI {
  async getRunningTryoutSections() {
    const response = await customFetch(`${BASE_URL_API}/running-tryout-sections/`);
    const data = await response.json();
    return data;
  }
}

export default new TryoutSectionAPI();
