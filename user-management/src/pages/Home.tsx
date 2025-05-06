// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import { UserForm } from "../components"; // Import the UserForm
import { User } from "../interface"; // User interface
import { NewUser } from "../interface"; // NewUser interface

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Users state to store the list of users

  // Handle adding new user
  const handleAddUser = (newUser: NewUser) => {
    const newUserObj: User = {
      id: Date.now(), // Unique ID
      name: newUser.name,
      username: "", // Leave this blank or handle it later
      email: newUser.email,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "",
      website: "",
      company: { name: "", catchPhrase: "", bs: "" },
    };

    // Update the user list
    const updatedUsers = [...users, newUserObj];
    setUsers(updatedUsers);

    // Save the updated user list to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Load users from localStorage when the component is mounted
  useEffect(() => {
    const storedUsers: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    setUsers(storedUsers);
  }, []);

  return (
    <div className="home-page">
      <h1>User Management</h1>

      {/* User Form for adding new users */}
      <UserForm onAddUser={handleAddUser} />

      {/* List of Users */}
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
