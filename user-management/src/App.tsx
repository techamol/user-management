import React, { useEffect, useState } from "react";
import { fetchUserList } from "./services/userService";
import { User } from "../src/interface/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUserList().then(setUsers);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} ({user.email})
        </div>
      ))}
    </div>
  );
}

export default App;
