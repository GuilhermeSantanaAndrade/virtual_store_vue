import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  async get(url: string) {
    const response = await axiosInstance.get(url);
    return response.data;
  },
  async post(url: string, body: any) {
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
};
