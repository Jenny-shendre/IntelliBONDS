import axios from "axios";

const BASE_URL = import.meta.env.VITE_INTELLIBONDS_BASE_URL|| "http://localhost:5173";

export const loginUser = (username, password) => {
  return axios.post(`${BASE_URL}/session`, {
    username,
    password,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchUser = (token) => {
  return axios.get(`${BASE_URL}/user/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
