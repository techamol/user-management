// src/components/UserList.tsx

import React, { useState, useEffect } from "react";
import UserForm from "../UserForm/UserForm";
import { User } from "../../interface";
import { NewUser } from "../../interface";
import { saveToLocalStorage, getFromLocalStorage } from "../../utils";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // State to hold users
  const [loading, setLoading] = useState<boolean>(true); // Loading state for users

  useEffect(() => {
    // Retrieve users from localStorage and parse them
    const storedUsers = getFromLocalStorage("userList");

    // Type-cast to User[] and check if it's a valid array
    if (Array.isArray(storedUsers)) {
      setUsers(storedUsers);
    }
    setLoading(false);
  }, []);

  const handleAddUser = (newUser: NewUser) => {
    const newUserObj: User = {
      id: Date.now(), // Unique ID
      name: newUser.name,
      username: "", // You can leave it blank or handle it later
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

    const updatedUserList = [...users, newUserObj];
    setUsers(updatedUserList);

    // Save updated list to localStorage
    saveToLocalStorage("userList", updatedUserList);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>User List</h1>

      {/* Render the UserForm to add new users */}
      <UserForm onAddUser={handleAddUser} />

      {/* Always display the list of users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
