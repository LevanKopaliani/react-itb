import "../styles/SectionTwo.scss";
import SectionTwoImg1 from "../assets/img/sectiontwoimage1.png";
import SectionTwoImg2 from "../assets/img/sectiontwoimage2.png";
import SectionTwoImg3 from "../assets/img/sectiontwoimage3.png";

export const SectionTwo = () => {
  return (
    <section className="section-two">
      <div className="wrapper">
        <div className="container">
          <div className="section-two-container">
            <div className="card">
              <div className="card-info">
                <div className="card-text">
                  <h2>
                    <p>01</p>Responsibility
                  </h2>
                  <p>
                    ITB commits to thoughtful decision-making, purposeful
                    action-taking and meaningful ground-breaking, fully owning
                    the outcomes of our actions and achievement of our purpose.
                  </p>
                </div>
                <div className="border"></div>
              </div>
              <div className="border-afterwrap"></div>
              <div className="card-img">
                <img src={SectionTwoImg1} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
