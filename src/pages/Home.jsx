import "../styles/Home.scss";
import HomePageImg from "../assets/img/kimsondoan.png";
import MobileImg from "../assets/img/mobileback.png";
import ScrollDownImg from "../assets/img/scrolldownarrow.png";
import PlayImg from "../assets/img/playimg.png";
import { SectionTwo } from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionFifth from "./SectionFifth";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="homepage" id="purpose">
      <div className="homepage-section">
        <div className="section-info">
          <div className="section-info-container">
            <h1
              className="section-info__title"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              Enable knowledge.
              <br /> Inspire positive change.
            </h1>
            <p className="section-info__subtitle">
              Technological innovation. <br />
              Advanced information.
              <br />
              Human elevation.
            </p>
            <div className="scroll-down">
              <p>Scroll Down</p>
              <p>
                <img src={ScrollDownImg} alt="ScrollDownImg" />
              </p>
            </div>
          </div>
        </div>
        <div className="homepage-section__img">
          <img className="desktopimg" src={HomePageImg} alt="HomePageImg" />
          <img className="mobile-img" src={MobileImg} alt="mobileImg" />
          <div className="video-button">
            <div className="video-button__text">
              <p>The Credo Video</p>
            </div>
            <div className="video-button__play">
              <p>
                <img src={PlayImg} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFifth />
    </main>
  );
};

export default Home;
