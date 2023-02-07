import "../styles/Home.scss";
import HomePageImg from "../assets/img/homepageimg.png";
import ScrollDownImg from "../assets/img/scrolldownarrow.png";
import PlayImg from "../assets/img/playimg.png";
import GirlFace from "../assets/img/girlface.png";

const Home = () => {
  return (
    <main className="homepage">
      <div className="homepage-section">
        <div className="section-info">
          <div className="section-info-container">
            <h1 className="section-info__title">
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
          <img src={HomePageImg} alt="HomePageImg" />
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
    </main>
  );
};

export default Home;
