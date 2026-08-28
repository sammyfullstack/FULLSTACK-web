import { useEffect, useState } from "react";
import Login from "./Login";
import Count from "./Count";
import About from "./About";
import Contact from "./Contact";
import UserProfile from "./UserProfile";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./components/Users";
import ClassCount from "./components/ClassCount";
import SignUp from "./components/SignUp";
import UpdateUser from "./UpdateUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [newTheme, setNewTheme] = useState("light");

  useEffect(() => {
    document.body.className = newTheme;
  }, [newTheme]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/count" element={<Count />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<users />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Route>

        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/classCount" element={<ClassCount />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
      <button
        onClick={() => setNewTheme(newTheme === "light" ? "dark" : "light")}
      >
        New Theme
      </button>
    </>
  );
}

export default App;

// import { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function ThemeButton() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff',
//       padding:'10px',
//       borderRadius:'50px'
//        }}
//     >
//       {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <div style={{ padding: '50px', textAlign: 'center' }}>
//         <h1>React Context API Example</h1>
//         <ThemeButton />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App
