import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const updateById = async (e) => {
    e.preventDefault();
    try {
      if (!name && !password && !role) return alert("Fill your credentials");
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://fullstack-web-h1r2.onrender.com/users/${id}`,
        {
          name,
          password,
          role,
        },
      );
      navigate(`/user/${id}`);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }

    if (error) return <h2>{error}</h2>;
  };

  return (
    <form onSubmit={updateById}>
      <input
        placeholder="Enter your name"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Update your role to admin or user"
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateUser;
