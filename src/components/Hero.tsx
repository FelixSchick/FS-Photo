import "./Hero.css";

import { Link } from "react-scroll";

function Hero() {
  return (
    <div id="heroscroll">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Felix Photography</h1>
          <hr className="solid-seperator" />
          <p>Thanks for your visit.</p>
        </div>
        <Link
          to="contentScroll"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <div className="arrow" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
