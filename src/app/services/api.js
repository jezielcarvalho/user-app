import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.1.100:3000/",
  baseURL: "http://10.0.2.2:3000/",
});

export default api;

/**
 *  CARREGA A LISTA DE USUÁRIOS DA API
 */
export const getUsers = async () => {
  try {
    const response = await api.get("users");

    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log("error", err);

    return [];
  }

  return [];
};
