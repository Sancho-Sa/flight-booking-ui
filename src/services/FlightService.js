import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = "http://localhost:8080/flight";

axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const createFlight = (flight) => axios.post(BASE_REST_API_URL, flight);

export const getAllFlights = () => axios.get(BASE_REST_API_URL);

export const getFlight = (id) => axios.get(BASE_REST_API_URL + "/" + id);

export const updateFlight = (id, flight) =>
  axios.put(BASE_REST_API_URL + "/" + id, flight);

export const deleteFlight = (id) => axios.delete(BASE_REST_API_URL + "/" + id);
