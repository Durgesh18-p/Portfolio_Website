import profile from "../Assets/profilepic.jpeg";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  const handleWhatsappContact = () => {
    let number = "9405807468";
    window.open(`https://api.whatsapp.com/send?phone=${number}`);
  };
  return (
    <footer>
      <div>
        <img src={profile} alt="Founder" />

        <h2>Suryawanshi Durgesh</h2>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://linkedin.com/in/durgesh-suryawanshi-056a58230"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Durgesh18-p" target="_blank">
            <AiFillGithub />
          </a>

          <FaWhatsappSquare
            style={{
              cursor: "pointer",
            }}
            onClick={handleWhatsappContact}
          />
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
