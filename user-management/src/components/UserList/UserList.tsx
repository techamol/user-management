// import React, { useEffect, useState } from "react";
// import { fetchUserList } from "../../services/userService"; // Service to fetch users
// import { User } from "../../interface/User"; // User interface model
// import styles from "./UserList.module.css";
// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]); // State to hold users
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state

//   useEffect(() => {
//     const loadUsers = async () => {
//       try {
//         const cachedUsers = localStorage.getItem("users"); // Check for cached users
//         if (cachedUsers) {
//           setUsers(JSON.parse(cachedUsers)); // Load from localStorage if available
//           setLoading(false);
//         } else {
//           const data = await fetchUserList(); // Fetch from API if not in localStorage
//           setUsers(data);
//           localStorage.setItem("users", JSON.stringify(data)); // Cache users to localStorage
//           setLoading(false);
//         }
//       } catch (err) {
//         setError("Failed to load users.");
//         setLoading(false);
//       }
//     };
//     loadUsers();
//   }, []);

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user: User) => (
//           <li key={user.id}>
//             {user.name} ({user.email})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
import React from "react";
import { UserCard } from "../../components";
import { User } from "../../interface";
import styles from "./UserList.module.css";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
