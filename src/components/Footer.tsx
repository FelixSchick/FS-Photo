import "./Footer.css";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <RouterLink to="/impressum">
        <p>Impressum</p>
      </RouterLink>
      <p>
        <a
          href="https://github.com/FelixSchick"
          target="_blank"
          rel="noreferrer"
        >
          Webdesign von Felix Schick
        </a>
      </p>
      <p>©{new Date().getFullYear()} Felix Schick</p>
    </div>
  );
}
export default Footer;
