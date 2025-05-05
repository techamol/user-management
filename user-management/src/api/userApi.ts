import axiosInstance from "./axiosInstance";
import { User } from "../interface/User";

export const getUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const response = await axiosInstance.post("/users", user);
  return response.data;
};
