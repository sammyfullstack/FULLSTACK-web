import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://fullstack-web-h1r2.onrender.com/users/login",
        {
          email,
          password,
        },
      );
      const token = res.data;
      console.log(res.data);
      console.log(token);
      const loggedInUser = await loginUser(token);
      console.log("logged in user:", loggedInUser);

      setEmail("");
      setPassword("");
      navigate(`/user/${loggedInUser._id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onLogin}>
      <input
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter your Password"
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
