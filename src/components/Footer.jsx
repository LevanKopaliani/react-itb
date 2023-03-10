import "../styles/Footer.scss";
import FooterLogo from "../assets/img/footerlogo.png";
import MainButton from "./UI/MainButton";
import FooterTweeter from "../assets/img/tweeterblack.png";
import FooterFacebook from "../assets/img/facebookblack.png";
import FooterLinkedin from "../assets/img/linkedinblack.png";
import FooterYoutube from "../assets/img/youtubeblack.png";
import Copyright from "../assets/img/copyrightimage.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div
          className="footer-container"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div className="footer-logo">
            <img src={FooterLogo} alt="logo" />
          </div>
          <ul className="footer-nav">
            <li className="anv-item">
              <Link to="purpose" spy={true} smooth={true}>
                Our Purpose
              </Link>
            </li>
            <li className="anv-item">
              <Link to="offering" spy={true} smooth={true}>
                Our Offering
              </Link>
            </li>
            <li className="anv-item">
              <Link to="capabilities" spy={true} smooth={true}>
                Capabilities
              </Link>
            </li>
            <li className="anv-item">
              <Link to="video" spy={true} smooth={true}>
                Manifesto Video
              </Link>
            </li>
            <li className="anv-item">
              <Link to="founder" spy={true} smooth={true}>
                Our Founder
              </Link>
            </li>
          </ul>
          <div className="newsletter">
            <label htmlFor="newsletter">Newsletter Signup</label>
            <input type="email" placeholder="Email" />
            <MainButton text={"Submit"} />
          </div>
        </div>
        <div className="copyright">
          <div className="social-links">
            <img src={FooterTweeter} alt="Tweeter" />
            <img src={FooterFacebook} alt="Facebook" />
            <img src={FooterLinkedin} alt="Linkedin" />
            <img src={FooterYoutube} alt="Youtube" />
          </div>

          <p className="copyright-text">
            <img src={Copyright} alt="Copyright" />
            2022 IT Broadcasting. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
