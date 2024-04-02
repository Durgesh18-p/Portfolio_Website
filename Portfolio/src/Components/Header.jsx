/* eslint-disable react/prop-types */
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  const handleResumeDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1duz4ioysjxf6bfToRhYxAgoSiWtlKThk/view?usp=drivesdk";
    window.open(resumeUrl);
  };
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent
        setMenuOpen={setMenuOpen}
        handleResumeDownload={handleResumeDownload}
      />
    </div>
  );
};

const NavContent = ({ setMenuOpen, handleResumeDownload }) => (
  <>
    <h2>Durgesh.</h2>
    <div>
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
    </div>
    <a href="mailto:suryadurgesh18@gmail.com">
      <button>Email</button>
      <button
        style={{
          marginLeft: "10px",
        }}
        onClick={handleResumeDownload}
      >
        Resume
      </button>
    </a>
  </>
);

export default Header;
