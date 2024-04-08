/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{ borderBottom: "1px solid black" }}>
        <NavContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

const handleResumeDownload = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1duz4ioysjxf6bfToRhYxAgoSiWtlKThk/view?usp=drivesdk";
  window.open(resumeUrl);
};

const NavContent = ({ menuOpen, setMenuOpen }) => (
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
      <button
        className="resume"
        onClick={() => {
          handleResumeDownload();
          setMenuOpen(false);
        }}
      >
        Resume
      </button>
    </div>
  </>
);

export default Header;
