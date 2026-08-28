import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UpdateUser from "./UpdateUser";
import { useUser } from "../UserContext";

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser, logoutUser, loading } = useUser("");

  useEffect(() => {
    const getUser = async () => {
      const token = await localStorage.getItem("token");
      const res = await axios.get(
        `https://fullstack-web-h1r2.onrender.com/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUser(res.data);
    };
    getUser();
  }, []);

  const deleteUser = async () => {
    const res = await axios.delete(
      `https://fullstack-web-h1r2.onrender.com/users/${id}`,
    );

    navigate("/sign-up");
  };

  const logOut = async () => {
    await localStorage.removeItem("token");
    navigate("/sign-up");
  };

  if (loading) return <div>loading...</div>;

  return (
    <>
      <h1>My name is {user.name}</h1>
      <button onClick={logoutUser}>Log out</button>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Current Theme
      </button>
      <h1>User Name: {user.name}</h1>
      <h1>User Email: {user.email}</h1>
      <h1>User Role: {user.role}</h1>

      <Link to={`/update/${id}`}>
        <button>Update User</button>
      </Link>

      <button onClick={deleteUser}>Delete User</button>
    </>
  );
}

export default UserProfile;
