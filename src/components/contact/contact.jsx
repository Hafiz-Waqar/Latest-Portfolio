import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="mailto:hafizryk7@gmail.com?subject=Required%20Front%20End%20Services&body=Hi!"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineMail className="icon" />
          <h2>
            Email <span>Creative Ambition</span>
          </h2>
        </a>

        <a
          href="https://wa.link/m8m5iv"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+92 308 751920</span>
          </h2>
        </a>

        <a
          href="https://msng.link/o/?hafiz_waqar_ali=ig"
          className="contact instagram"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>_Creative_Ambition_</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
