import React, { useEffect, useState } from "react";
import { UserCard } from "../../src/components"; // Importing UserCard via index.ts
import { User } from "../../src/interface";

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Assuming we are fetching the data or loading it from localStorage
    const fetchedUsers: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    setUsers(fetchedUsers);
  }, []);

  return (
    <div className="home-page">
      <h1>User Management</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} /> // Display each user in a card
      ))}
    </div>
  );
};

export default HomePage;
