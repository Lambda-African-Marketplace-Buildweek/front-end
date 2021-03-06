import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://lbs-african-marketplace.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
