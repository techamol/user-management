import React, { useState } from "react";
import { NewUser } from "../../interface";
interface UserFormProps {
  onAddUser: (newUser: NewUser) => void;
}
const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onAddUser({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
