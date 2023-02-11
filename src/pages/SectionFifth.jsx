import "../styles/SectionFifth.scss";
import FounderImg from "../assets/img/founder.png";
import InfoImage from "../assets/img/fifthsmallimage.png";

const SectionFifth = () => {
  return (
    <section className="SectionFifth" id="founder">
      <div className="wrapper">
        <div className="">
          <div className="section-fifth-container">
            <div
              className="section-fifth-img "
              data-aos="zoom-in"
              data-aos-duration="1100"
            >
              <img src={FounderImg} alt="founder" />
            </div>
            <div
              className="section-fifth-info"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <h2 className="title">
                <p>the ceo</p>Our Founder
              </h2>
              <p className="subtitle">
                Ann Margaret Howard’s vision for technology is rooted in
                knowledge, and the positive change it inspires. As a pioneer and
                leader in the tech sector for over three decades, her ability to
                identify unmet human needs and lead the development and
                deployment of software, systems, and solutions to satisfy them
                is unparalleled.
              </p>
              <div className="img-afterwrap">
                <img src={FounderImg} alt="" />
              </div>
              <p className="subtitle part-2">
                As an innovator and gifted strategist, she recognizes new ways
                technology and an ever-expanding wealth of information can
                converge to enrich individual experiences, and ultimately
                improve the human condition.
              </p>
              <img src={InfoImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFifth;
