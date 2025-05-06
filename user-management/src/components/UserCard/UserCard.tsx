import React from "react";
import { User } from "../../interface/User";
import styles from "./UserCard.module.css";
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.userCard}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
