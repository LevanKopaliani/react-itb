import "../../styles/MenuOverlay.scss";
import Logo from "../../assets/img/logowhite.png";
import CloseButton from "../../assets/img/closebutton.png";
import Mailimg from "../../assets/img/mailimg.png";
import PhoneImg from "../../assets/img/phoneimg.png";
import Facebook from "../../assets/img/facebook.png";
import Youtube from "../../assets/img/youtube.png";
import Linkedin from "../../assets/img/linkedin.png";
import Tweeter from "../../assets/img/twitter.png";
import MainButton from "./MainButton";

const MenuOverlay = ({ onPress }) => {
  return (
    <div className="overlay">
      <div className="wrapper">
        <div className="overlay-header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="CloseButton" onClick={onPress}>
            <img src={CloseButton} alt="CloseButton" />
          </div>
        </div>
        <div className="form-container">
          <div className="overlay-form">
            <form action="">
              <div className="form-heading">
                <h2>Get in Touch</h2>
                <p>We look forward to hearing from you.</p>
              </div>
              <div className="input-group">
                <label htmlFor="">First Name, Last Name*</label>
                <input type="text" name="name" placeholder="Type Here..." />
              </div>
              <div className="input-group">
                <label htmlFor="">Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Message</label>
                <textarea
                  name="text"
                  id="text"
                  cols="30"
                  rows="2"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <MainButton text={"Contact Us"} />
              <div className="form-bottom-border"></div>
            </form>

            <div className="form-info">
              <h2>Contact Info</h2>
              <div className="contact-lnks">
                <p>
                  <span>
                    <img src={Mailimg} alt="" />
                  </span>
                  info@itbroadcasting.com
                </p>
                <p>
                  <span>
                    <img src={PhoneImg} alt="" />
                  </span>
                  info@itbroadcasting.com
                </p>
              </div>
              <div className="social-links">
                <img src={Tweeter} alt="" />
                <img src={Facebook} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
