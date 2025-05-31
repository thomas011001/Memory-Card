import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <h1>Memory Cards</h1>
      <NavLink to="/home" end>
        Home
      </NavLink>
    </nav>
  );
}

export default NavBar;
