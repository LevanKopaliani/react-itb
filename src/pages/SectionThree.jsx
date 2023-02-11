import "../styles/SectionThree.scss";
import SectionThreeImg from "../assets/img/sectionthree.png";
import MainButton from "../components/UI/MainButton";

const SectionThree = () => {
  return (
    <section className="SectionThree" id="capabilities">
      <div className="wrapper">
        <div className="container">
          <div className="section-three-container">
            <div
              className="section-three-info"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <p className="before-title">more about</p>
              <h2 className="title">Capabilities Deck</h2>
              <p className="subtitle">
                As enablers of knowledge, ITB places the utmost importance on
                ensuring the data..
              </p>
              <MainButton text={"Download VA Specific Deck"} />
              <MainButton text={"Download Healthcare Deck"} />
            </div>
            <div className="section-three-img">
              <img
                src={SectionThreeImg}
                alt=""
                data-aos="zoom-in"
                data-aos-duration="1100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
