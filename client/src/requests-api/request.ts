import axios from "axios";

const API_URL = "http://localhost:8000/api";
export const request = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem( "token" )}`,
  },
});
