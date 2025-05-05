// src/tests/services/userService.test.ts

import * as userApi from "../../../src/api/userApi"; // Import the userApi module
import { User } from "../../../src/interface/User"; // Import the User interface

// Mock the axiosInstance for API calls (to isolate unit tests)
jest.mock("../../../src/api/axiosInstance", () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

// Mock the userApi functions so we can test without real HTTP requests
describe("User API Service", () => {
  // Define mock data for testing
  const mockUsers: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ];

  const mockUser: User = { id: 1, name: "John Doe", email: "john@example.com" };

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test to ensure clean test environment
  });

  test("should fetch users from API", async () => {
    // Mock the axiosInstance.get method
    (userApi.getUsers as jest.Mock).mockResolvedValueOnce(mockUsers);

    // Call the function
    const users = await userApi.getUsers();

    // Assert that the API call was made correctly
    expect(userApi.getUsers).toHaveBeenCalledTimes(1);
    expect(users).toEqual(mockUsers); // Ensure the returned users are as expected
  });

  test("should create a user via API", async () => {
    // Mock the axiosInstance.post method
    (userApi.createUser as jest.Mock).mockResolvedValueOnce(mockUser);

    // Call the function
    const user = await userApi.createUser(mockUser);

    // Assert that the API call was made correctly
    expect(userApi.createUser).toHaveBeenCalledTimes(1);
    expect(user).toEqual(mockUser); // Ensure the returned user is as expected
  });
});
