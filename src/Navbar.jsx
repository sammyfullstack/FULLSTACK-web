import { Link, NavLink } from "react-router-dom"

function Navbar(){
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/count">Count</NavLink>
      <NavLink to="/about">About</NavLink>
      <Link to="/users">Users</Link>
      <Link to="/ClassCounter">class</Link>

    </nav>
  )
}

export default Navbar