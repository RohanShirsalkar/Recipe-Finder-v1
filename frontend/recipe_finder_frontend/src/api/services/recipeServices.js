import { axiosInstance } from "../config/axiosConfig";

export const findRecipe = async (data) => {
  return await axiosInstance.post("/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
