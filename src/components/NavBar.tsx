import "./NavBar.css";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo-fs-transpa-white.png";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <RouterLink to="/">
            <img src={logo} alt="Logo" />
          </RouterLink>
        </div>
        <div className="name">
          <a>Felix Photography</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
