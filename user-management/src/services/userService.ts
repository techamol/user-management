// src/services/userService.ts
import { getUsers, createUser } from "../api/userApi";
import { User } from "../interface/User";

// Fetch users using API call
export const fetchUserList = async (): Promise<User[]> => {
  return await getUsers(); // Calls API to get the list of users
};

// Add a new user using API call
export const addNewUser = async (user: Partial<User>): Promise<User> => {
  return await createUser(user); // Calls API to create a new user
};
