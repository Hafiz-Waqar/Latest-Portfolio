import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/hafiz_waqar_ali/">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/Hafizwaqar927727779">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://twitter.com/Hafiz_Waqar_Ali">
          {" "}
          <TiSocialTwitter className="social" />
        </a>

        <a href="https://github.com/Hafiz-Waqar">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
