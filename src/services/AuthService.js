import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080";

export const registerAPICall = (registerObj) => {
  return axios.post(AUTH_REST_API_BASE_URL + "/registration", registerObj);
};

export const loginAPICall = (email, password) => {
  return axios.post(AUTH_REST_API_BASE_URL + "/", { email, password });
};

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (email) => {
  sessionStorage.setItem("authenticatedUser", email);
};

export const isUserLoggedIn = () => {
  const email = sessionStorage.getItem("authenticatedUser");

  if (email == null) {
    return false;
  } else {
    return true;
  }
};

export const getLoggedInUser = () => {
  const email = sessionStorage.getItem("authenticatedUser");
  return email;
};

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload(false);
};
