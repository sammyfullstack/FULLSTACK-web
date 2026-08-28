import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async (token) => {
    try {
      const res = await axios.get(
        `https://fullstack-web-h1r2.onrender.com/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUsers(res.data);
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUser = async (token) => {
    try {
      const decodedToken = jwtDecode(token);

      const userId = decodedToken.id;

      if (!userId) {
        throw new Error("User Id found in Token");
      }

      const res = await axios.get(
        `https://fullstack-web-h1r2.onrender.com/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUser(res.data);
      return res.data;
    } catch (err) {
      console.error("Fetch user error:", err);
      setUser(null);
      localStorage.removeItem("token");
      throw err;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    getUser(token).catch(() => {
      setUser(null);
    });
  }, []);

  const loginUser = async (token) => {
    try {
      localStorage.setItem("token", token);
      const loggedInUser = await getUser(token);
      return loggedInUser;
    } catch (err) {
      localStorage.removeItem("token");
      throw error;
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, users, setUser, getUsers, loginUser, logoutUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
