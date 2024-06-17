import "./NavBar.css";

import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo-fs-transpa-white.png";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${show ? "navbar--visible" : "navbar--hidden"}`}>
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
