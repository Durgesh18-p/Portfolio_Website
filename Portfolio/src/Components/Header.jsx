/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <NavContent menuOpen={menuOpen} />
      </nav>

      <button
        className="navBtn"
        onClick={() => {
          setMenuOpen(!menuOpen);
          console.log("clicked");
        }}
      >
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent menuOpen={menuOpen} />
    </div>
  );
};

const handleResumeDownload = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1duz4ioysjxf6bfToRhYxAgoSiWtlKThk/view?usp=drivesdk";
  window.open(resumeUrl);
};

const NavContent = ({ setMenuOpen, menuOpen }) => (
  <>
    <h2>Durgesh.</h2>
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Skills
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
      <a href="mailto:suryadurgesh18@gmail.com">
        <button className="resume">Email</button>
      </a>
      <button className="resume" onClick={() => handleResumeDownload()}>
        Resume
      </button>
    </div>
    {/* <a href="mailto:suryadurgesh18@gmail.com">
      <button>Email</button>
    </a> */}
  </>
);

export default Header;
